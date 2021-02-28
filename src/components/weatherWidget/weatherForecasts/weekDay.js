/* React */
import React from "react";
import moment from "moment";

const WeekDay = (props) => {
  return (
    <h3>
      {moment().format("YYYY-MM-DD") === moment(props.date).format("YYYY-MM-DD")
        ? "Today"
        : moment(props.date).format("dddd")}
    </h3>
  );
};

export default WeekDay;
