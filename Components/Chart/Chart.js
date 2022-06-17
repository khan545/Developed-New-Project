import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataValuePoints = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxium = Math.max(...dataValuePoints);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          key={dataPoint.id}
          value={dataPoint}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
