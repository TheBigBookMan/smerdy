import axios from "axios";
import moment from "moment";

//? Returns an array of dates between the two dates
const getDatesDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
  const getDateAsArray = (date) => {
    return moment(date.split(/\D+/), date_format);
  };
  const diff =
    getDateAsArray(end_date).diff(getDateAsArray(start_date), "days") + 1;
  const dates = [];
  for (let i = 0; i < diff; i++) {
    const nextDate = getDateAsArray(start_date).add(i, "day");
    const isWeekEndDay = nextDate.isoWeekday() > 7;
    if (!isWeekEndDay)
      dates.push({ date: nextDate.format(date_format), commits: 0 });
  }
  return dates;
};

const date_log = getDatesDiff(
  "2023-01-12",
  new Date().toISOString().slice(0, 10)
);
// console.log(date_log);

//? http://haripo.github.io/react-github-contribution-calendar/

// const reposUrl = "https://api.github.com/users/TheBigBookMan/repos";
const commitUrl =
  "https://api.github.com/repos/TheBigBookMan/EasyReddit/commits?per_page=100";

//* need to get repos from others that have put commits on
//* sort through repos adding the commit dates to the array of dates

export const getRepos = async () => {
  let repos;
  try {
    // const { data } = await axios.get(reposUrl);
    // ? Array with the repos names
    // const reposArray = data.map((repo) => repo.name);
    // console.log(reposArray);
    const commits = getRepoCommits();
    return commits;
    // console.log(data);
  } catch (err) {
    console.log(err);
  }

  return repos;
};

export const getRepoCommits = async () => {
  try {
    const { data } = await axios.get(commitUrl);
    let repoCommits = data.map((info) => info.commit.author.date.slice(0, 10));
    const addedCommits = await addCommitsToDate(repoCommits);
    // console.log(data);
    return addedCommits;
  } catch (err) {
    console.log(err);
  }
};

const addCommitsToDate = async (commits) => {
  try {
    // console.log(commits);
    date_log.forEach((date) => {
      for (let i = 0; i < commits.length; i++) {
        if (commits[i] === date.date) {
          date.commits = date.commits + 1;
        }
      }
    });

    const objectDates = await createObjectDatesCommits(date_log);
    // console.log(date_log);
    // console.log(commits);
    return objectDates;
  } catch (err) {
    console.log(err);
  }
};

const createObjectDatesCommits = async (list) => {
  try {
    var finalObjCommits = list.reduce(
      // eslint-disable-next-line no-sequences
      (obj, item) => ((obj[item.date] = item.commits), obj),
      {}
    );

    // console.log(finalObjCommits);
    return finalObjCommits;
  } catch (err) {
    console.log(err);
  }
};
