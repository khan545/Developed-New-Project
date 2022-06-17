import React from "react";
import "./ChartBar";

const ChartBar = (props) => {
  let barFillheight = "0%";
  if (props.max > 0) {
    barFillheight = Math.random((props.value / props.maxValue) * 100) + "0%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillheight }}
        ></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
