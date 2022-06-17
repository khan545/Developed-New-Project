import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expences.css";

import ExpenceFilter from "./ExpenceFilter";
import ExpencesList from "./ExpencesList";
import ExpencesChart from "./ExpencesChart";
const Expences = (props) => {
  const [filterYears, setFilterYear] = useState("2020");
  const filterHandler = (selectedYears) => {
    setFilterYear(selectedYears);
  };
  const filterExpence = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYears;
  });

  return (
    <li>
      <Card>
        <ExpenceFilter selected={filterYears} onChangeFilter={filterHandler} />
        <ExpencesChart expences={filterExpence} />
        <ExpencesList items={filterExpence} />
      </Card>
    </li>
  );
};

export default Expences;
