import React from "react";
import { Bar } from "react-chartjs-2";
import dailySales from "../json/daily_sales.json";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
("chart.js");

ChartJS.register(
  LineElement,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const data = {
  labels: dailySales.labels,
  datasets: [
    {
      label: dailySales.labels,
      data: dailySales.values,
      borderWidth: 1,
      borderColor: "red",
      backgroundColor: "dodgerblue",
    },
  ],
};
const DailySales = () => {
  return (
    <div>
  
  
  
  
      <h1 className="bg-[#4AC0FF] py-2 w-full rounded-lg border-b-2 border-blue-700 text-center text-2xl font-semibold shadow">
        Daiyly sales
      </h1>
      <div className=" max-h-[80vh] overflow-y-auto">
        <Bar key={Math.random()} width={1000} height={400} data={data} />
      </div>
    </div>
  );
};

export default DailySales;
