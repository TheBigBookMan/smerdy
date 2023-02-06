import React, { useState, useEffect } from "react";
import Calendar from "react-github-contribution-calendar";
import { AiFillGithub } from "react-icons/ai";
import { getRepos } from "../utils/github";
import { githubCommits } from "../utils/commits";

// const getCommitList = async () => {
//   const list = await getRepos();
//   // console.log(JSON.stringify(list));
//   return list;
// };

const GitHub = () => {
  // const [githubCommitList, setgithubCommitList] = useState({});

  //? Initially made a github API call to get all commits from each repo and store into an object, the algorithms do work and it displays correctly automatically, but requires too many API calls which exceed the GitHub limit so it won't work unfortunately. Have to do it manually now
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const getData = await getCommitList();
  //     if (getData) {
  //       setgithubCommitList(getData);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //? this is year-month-day
  var until = new Date().toISOString().slice(0, 10);

  //TODO this will need to be using the data from the github API and update daily as well--- algorithm tricky
  // var values = {
  //   "2023-01-23": 1,
  //   "2023-01-26": 2,
  //   "2023-01-27": 3,
  //   "2023-01-28": 4,
  //   "2023-01-29": 4,
  // };
  // console.log(values);

  var panelColors = [
    "#000",
    "#1C7512",
    "#1C7512",
    "#1C7512",
    "#1C7512",
    "#1C7512",
    "#2CAE1E",
    "#2CAE1E",
    "#2CAE1E",
    "#2CAE1E",
    "#2CAE1E",
    "#44E532",
    "#44E532",
    "#44E532",
    "#44E532",
    "#44E532",
    "#9AFF8F",
  ];
  var panelAttributes = { rx: 6, ry: 6 };
  var weekNames = ["S", "M", "T", "W", "T", "F", "S"];
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let values = githubCommits;

  // if (githubCommitList) {
  // values = githubCommitList;
  //   // console.log(values);
  // }

  return (
    <div className="flex flex-col gap-4 md:w-4/6 lg:pr-36">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-green-400 text-2xl md:text-4xl font-bold">
            Github Daily Contributions
          </h1>
          <a
            href="https://github.com/TheBigBookMan?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="hover:text-cyan-100 text-green-400 text-4xl transition-all" />
          </a>
        </div>
        <p className="text-cyan-100 text-sm">
          My GitHub commit history shows how determined I am to continue
          learning and building. Ever since I graduated my Bootcamp in November
          2022, I have been self learning through Udemy and Youtube courses, as
          well as reading documentation.
        </p>
        <p className="text-zinc-50 text-xs">Commits</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-zinc-50 w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs font-bold">None</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-[#1C7512] w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs font-bold">1-5</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-[#2CAE1E] w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs font-bold">6-10</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-[#44E532] w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs font-bold">11-15</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-[#9AFF8F] w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs font-bold">16+</p>
          </div>
        </div>
      </div>

      {values.length < 10 ? (
        <h1 className="font-bold text-green-400">Loading...</h1>
      ) : (
        <>
          <Calendar
            panelAttributes={panelAttributes}
            values={values}
            until={until}
            panelColors={panelColors}
            weekNames={weekNames}
            monthNames={monthNames}
          />
        </>
      )}
    </div>
  );
};

export default GitHub;
