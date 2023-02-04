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
    if (!isWeekEndDay) dates.push(nextDate.format(date_format));
  }
  return dates;
};

const date_log = getDatesDiff(
  "2023-01-12",
  new Date().toISOString().slice(0, 10)
);
// const date_log = getDatesDiff(
//   "2022-06-20",
//   new Date().toISOString().slice(0, 10)
// );
console.log(date_log);

//!
//! Currently working on this
//!

// ? https://api.github.com/repos/TheBigBookMan/Houride/commits?per_page=100

//https://stackoverflow.com/questions/27931139/how-to-use-github-v3-api-to-get-commit-count-for-a-repo/70610670#70610670

//* Need to call the list of repositories I have from an API call and then create function to cycle through each one and call another api for the commit history from each and just add those to a ounter for each day--- this can be updated at the end of every day automatically

//* Would maybe use D3 to make some sort of graph and

//* https://api.github.com/users/TheBigBookMan/repos --- cycle through these repos

//* Might need to do a seperate call for the commits on other repos like CoinCharter and YouTrailer

//? can extract the date for when the commits happened through properties

//?
//? http://haripo.github.io/react-github-contribution-calendar/
//? This is the package to import the calendar and then connect the data from the function below into there
//?

const onePerPage =
  "https://api.github.com/repos/TheBigBookMan/Houride/commits?sha=main&per_page=1&page=1";
// ?
const reposUrl = "https://api.github.com/users/TheBigBookMan/repos";
const commitUrl =
  "https://api.github.com/repos/TheBigBookMan/EasyReddit/commits?per_page=100";

//* need to get repos from others that have put commits on
//* sort through repos adding the commit dates to the array of dates
//* matching up the commit date with the date

export const getRepos = async () => {
  let repos;
  try {
    const { data } = await axios.get(reposUrl);
    // ? Array with the repos names
    const reposArray = data.map((repo) => repo.name);
    // console.log(reposArray);
    getRepoCommits();
    // console.log(data);
  } catch (err) {
    console.log(err);
  }

  return repos;
};

const getRepoCommits = async () => {
  try {
    const { data } = await axios.get(commitUrl);
    let repoCommits = data.map((info) => info.commit.author.date.slice(0, 10));
    addCommitsToDate(repoCommits);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const addCommitsToDate = async (commits) => {
  console.log(commits);
};
