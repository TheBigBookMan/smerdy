import axios from "axios";

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

const reposUrl = "https://api.github.com/users/TheBigBookMan/repos";
const commitUrl =
  "https://api.github.com/repos/TheBigBookMan/Houride/commits?per_page=100";

export const getRepos = async () => {
  let repos;
  try {
    const { data } = await axios.get(commitUrl);
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  return repos;
};
