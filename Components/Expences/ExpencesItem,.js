import "./ExpencesItem.css";
import React from "react";
import ExpenceData from "../Expences/ExpenceData";
import Card from "../UI/Card";

export const ExpencesItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const handleClick = () => {
  //   setTitle("Update");
  // };
  return (
    <Card className="expense-item">
      <ExpenceData date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button>Update Tittle</button>
    </Card>
  );
};
