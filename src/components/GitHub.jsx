import React from "react";
import Calendar from "react-github-contribution-calendar";

const GitHub = () => {
  //TODO make this update everyday with javascript datetime or maybe react library?
  //? this is year-month-day
  var until = "2022-12-10";

  //TODO this will need to be using the data from the github API and update daily as well--- algorithm tricky
  var values = {
    "2022-12-10": 1,
    "2022-12-09": 2,
    "2022-12-08": 3,
    "2022-12-07": 4,
    "2022-12-06": 4,
  };

  var panelColors = ["#EEEEEE", "#24ff32", "#15a31e", "#0e5712", "#0a380c"];
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
    <div className="flex flex-col">
      <h1 className="text-green-400 text-2xl md:text-4xl font-bold">
        Github Contributions
      </h1>
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
