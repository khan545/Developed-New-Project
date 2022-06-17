import React from "react";
import ExpenceForm from "./ExpenceForm";
import "./NewExepence.css";

export const NewExepence = (props) => {
  const sveExpenceDataHandler = (enterExpenceData) => {
    const expenceData = {
      ...enterExpenceData,
      id: Math.random().toString(),
    };
    props.onAddExpence(expenceData);
  };

  return (
    <div className="new-expense">
      <ExpenceForm onsaveExpenceData={sveExpenceDataHandler} />
    </div>
  );
};
