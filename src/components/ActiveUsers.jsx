import activeUsersData from "../json/active_users.json";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const data = {
    labels: activeUsersData.labels,
    datasets: [
      {
        label: activeUsersData.title,
        data: activeUsersData.values,
        borderWidth: 1,
        borderColor: 'dodgerblue',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

export default function ActiveUsers(){
    return <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="bg-[#4AC0FF] py-2 w-full rounded-lg border-b-2 border-blue-700 text-center text-2xl font-semibold shadow">Active Users</h1>
        <Line key={Math.random()} data={data} />
    </div>
}