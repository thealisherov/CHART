import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import userVisits from '../json/user_visits.json'
export default function UserVisits() {

  const data = {
    labels:userVisits.labels ,
    datasets: [
      {
        label: "User Visits",
        data: userVisits.values,
        backgroundColor: "orange",
        borderColor: "darkorange",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-5">
      <h1 className="bg-[#4AC0FF] py-2 w-full rounded-lg border-b-2 border-blue-700 
      text-center text-2xl font-semibold shadow mb-3">
        User Visits
      </h1>

      <Bar data={data} />
    </div>
  );
}
