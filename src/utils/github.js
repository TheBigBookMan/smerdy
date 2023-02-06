import axios from "axios";
import moment from "moment";

// const accessToken = "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";
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

//? Returns an array of dates between the two datess
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
  "2022-06-20",
  new Date().toISOString().slice(0, 10)
);
// console.log(date_log);

//? http://haripo.github.io/react-github-contribution-calendar/

const reposUrl = "https://api.github.com/users/TheBigBookMan/repos";

//* need to get repos from others that have put commits on
//* sort through repos adding the commit dates to the array of dates

export const getRepos = async () => {
  let repos;
  try {
    const { data } = await axios.get(reposUrl, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });
    // ? Array with the repos names
    const reposArray = data.map((repo) => repo.name);

    const commits = await getRepoCommits(reposArray);
    // console.log(commits);
    return commits;
    // console.log(data);
  } catch (err) {
    console.log(err);
  }

  return repos;
};

export const getRepoCommits = async (reposList) => {
  try {
    let addedCommits;
    addedCommits = await getOtherRepoCommits();
    for (let i = 0; i < reposList.length; i++) {
      const allRepoCommits = await concatPages(reposList[i]);
      // console.log(allRepoCommits);
      let repoCommits = allRepoCommits.map((info) =>
        info.commit.author.date.slice(0, 10)
      );
      addedCommits = await addCommitsToDate(repoCommits);
      // console.log(addedCommits);

      if (i === reposList.length - 1) {
        // console.log(addedCommits);
        return addedCommits;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getOtherRepoCommits = async () => {
  try {
    const concatCommits = await concatPages("coin-charter");

    const commitsOnPage = concatCommits.filter((commit) => {
      if (commit.committer.login === "TheBigBookMan") {
        return commit;
      }
    });
    return commitsOnPage;
  } catch (err) {
    console.log(err);
  }
};

const concatPages = async (repo) => {
  try {
    let fullCommits = [];
    for (let i = 1; i < 4; i++) {
      if (repo === "coin-charter") {
        const { data } = await axios.get(
          `https://api.github.com/repos/bradbrad88/${repo}/commits?per_page=100&page=${i}`,
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          }
        );
        fullCommits = fullCommits.concat(data);
      } else {
        const { data } = await axios.get(
          `https://api.github.com/repos/TheBigBookMan/${repo}/commits?per_page=100&page=${i}`,
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          }
        );
        fullCommits = fullCommits.concat(data);
      }
    }
    // console.log(fullCommits);
    return fullCommits;
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
