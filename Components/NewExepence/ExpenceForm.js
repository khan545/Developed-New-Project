import React, { useState } from "react";
import "./ExpenceForm.css";
const ExpenceForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmout, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // const [enterInput, setEnterInput] = useState({
  //   enterTitle: "",
  //   enterAmout: "",
  //   enterDate: "",
  // });

  const handleTitele = (event) => {
    setEnterTitle(event.target.value);
  };
  const handleAmount = (event) => {
    setEnterAmount(event.target.value);
  };
  const handleDate = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenceData = {
      title: enterTitle,
      amount: enterAmout,
      date: new Date(enterDate),
    };
    props.onsaveExpenceData(expenceData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitele} value={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmount}
            value={enterAmout}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={enterDate}
            onChange={handleDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">From Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenceForm;
