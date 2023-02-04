import React, { useState, useEffect } from "react";
import Calendar from "react-github-contribution-calendar";
import { AiFillGithub } from "react-icons/ai";
import { getRepos } from "../utils/github";

//TODO Need to make algorithm that extracts all the data from the API to girhub request about each repo commit and adds it to each individual date

const getCommitList = async () => {
  const list = await getRepos();
  console.log(list);
  return list;
};

const GitHub = () => {
  const [githubCommitList, setGithubCommitList] = useState({});

  useEffect(() => {
    const getData = getCommitList();
    if (getData) {
      setGithubCommitList(getData);
    }
  }, []);

  //TODO make this update everyday with javascript datetime or maybe react library?
  //? this is year-month-day
  var until = "2023-01-29";

  //TODO this will need to be using the data from the github API and update daily as well--- algorithm tricky
  // var values = {
  //   "2023-01-23": 1,
  //   "2023-01-26": 2,
  //   "2023-01-27": 3,
  //   "2023-01-28": 4,
  //   "2023-01-29": 4,
  // };
  var values = githubCommitList;
  console.log(values);

  var panelColors = [
    "#EEEEEE",
    "#0a380c",
    "#0a380c",
    "#0a380c",
    "#0a380c",
    "#0a380c",
    "#0e5712",
    "#0e5712",
    "#0e5712",
    "#0e5712",
    "#0e5712",
    "#15a31e",
    "#15a31e",
    "#15a31e",
    "#15a31e",
    "#15a31e",
    "#24ff32",
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

  return (
    <div className="flex flex-col gap-4 md:w-4/6 lg:pr-36">
      <div className="flex flex-col">
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
        <p className="text-zinc-50 text-xs">Commits</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-zinc-50 w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs">None</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-[#0a380c] w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs">1-5</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-[#0e5712] w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs">6-10</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-[#15a31e] w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs">11-15</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="bg-[#24ff32] w-[10px] h-[10px] rounded-xl"></span>
            <p className="text-green-400 text-xs">16+</p>
          </div>
        </div>
      </div>
      <Calendar
        panelAttributes={panelAttributes}
        values={values}
        until={until}
        panelColors={panelColors}
        weekNames={weekNames}
        monthNames={monthNames}
      />
    </div>
  );
};

export default GitHub;
