import React from "react";
import { ExpencesItem } from "./ExpencesItem,";
import "./ExpencesList.css";
const ExpencesList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">No Data Found</h3>;
  }

  return (
    <ul className="Expences_List">
      {props.items.map((expense) => (
        <ExpencesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpencesList;
