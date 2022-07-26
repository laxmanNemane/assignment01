import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // console.log(props)
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // console.log(dataPointValues)
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint , index) => (
        // console.log(dataPoint.label)
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
