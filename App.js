import { useState } from "react";
import Expences from "./Components/Expences/Expences";
import { NewExepence } from "./Components/NewExepence/NewExepence";
const dummy_Data = [
  {
    id: "e1",
    date: new Date(2022, 2, 28),
    title: "Car Insurance",
    amount: 258.23,
  },
  {
    id: "e2",
    date: new Date(2021, 2, 28),
    title: "Body Insurance",
    amount: 265.23,
  },
  {
    id: "e3",
    date: new Date(2025, 2, 14),
    title: "Life Insurance",
    amount: 256.23,
  },
];
function App() {
  const [expences, setExpences] = useState(dummy_Data);
  // const expence = [
  //   {
  //     id: "e1",
  //     date: new Date(2022, 2, 28),
  //     title: "Car Insurance",
  //     amount: 258.23,
  //   },
  //   {
  //     id: "e2",
  //     date: new Date(2021, 2, 28),
  //     title: "Body Insurance",
  //     amount: 265.23,
  //   },
  //   {
  //     id: "e3",
  //     date: new Date(2025, 2, 14),
  //     title: "Life Insurance",
  //     amount: 256.23,
  //   },
  // ];

  const addExpenceHandler = (expence) => {
    setExpences((prevExpences) => {
      return [expence, ...prevExpences];
    });
  };
  return (
    <div>
      <NewExepence onAddExpence={addExpenceHandler} />
      <Expences items={expences} />
    </div>
  );
}

export default App;
