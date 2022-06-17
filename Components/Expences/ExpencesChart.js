import React from "react";
import Chart from "../Chart/Chart";

const ExpencesChart = (props) => {
  const ChartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expence of props.expences) {
    const expenceMonths = expence.date.getMonth();
    ChartDataPoints[expenceMonths].value += expence.amount;
  }
  return (
    <div>
      <Chart dataPoints={ChartDataPoints} />
    </div>
  );
};

export default ExpencesChart;
