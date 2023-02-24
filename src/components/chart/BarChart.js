import React from "react";
import { Bar} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './Chart.scss';


function BarChart({ chartData }) {
  return (<div className="chart-container">
  <div className="chart-canvas">
  <Bar data={chartData} />
 </div>
 
</div>
);
}

export default BarChart;