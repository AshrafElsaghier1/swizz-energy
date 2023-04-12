import React from "react";
import ReactApexChart from "react-apexcharts";

const chartOptions = {
  title: {
    text: "",
  },
  series: [
    {
      name: "Amount of carbon dioxide (parts per million)",
      data: [280, 300, 320, 340, 360, 380, 400, 420, 440],
    },
  ],
  xaxis: {
    categories: [
      "1960",
      "1970",
      "1980",
      "1990",
      "2000",
      "2010",
      "2020",
      "2030",
      "2040",
    ],
  },
};

function MyChart() {
  return (
    <ReactApexChart
      options={chartOptions}
      series={chartOptions.series}
      type="line"
      height={350}
    />
  );
}

export default MyChart;
