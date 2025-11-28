import { Line } from "react-chartjs-2";
import Standarts from "../json/standard_subscriptions.json";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
export default function StandartSubscriptions() {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const data = {
    labels: Standarts.labels,
    datasets: [
      {
        label: "Standart subscriptions",
        data: Standarts.values,
        borderWidth: 1,
        borderColor: "green",
        backgroundColor: "dodgerblue",
      },
    ],
  };

  return (
    <div>
      <h1 className="bg-[#4AC0FF] py-2 w-full rounded-lg border-b-2 border-blue-700 text-center text-2xl font-semibold shadow mb-3">
        Standart Subscriptions
      </h1>
      <Line data={data} />
    </div>
  );
}
