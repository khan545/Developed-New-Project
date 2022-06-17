import React from "react";
import "./ExpenceData.css";
const ExpenceData = (props) => {
  const months = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const day = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{months}</div>
      <div className="expense-date__year">{date}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenceData;
