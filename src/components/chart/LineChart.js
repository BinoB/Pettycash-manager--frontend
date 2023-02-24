import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './Chart.scss';

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
       <div className="chart-canvas">
       <Line data={chartData} />
      </div>
      
    </div>
  );
}

export default LineChart;
