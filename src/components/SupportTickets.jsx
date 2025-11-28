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
import Support from "../json/support_tickets.json";
export default function SupportTickets() {
  const data = {
    labels: Support.labels,
    datasets: [
      {
        label: "Support Tickets",
        data: Support.values,
        backgroundColor: "dodgerblue",
        borderColor: "blue",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-5">
      <h1
        className="bg-[#4AC0FF] py-2 w-full rounded-lg border-b-2 border-blue-700 
      text-center text-2xl font-semibold shadow mb-3"
      >
        Support Tickets
      </h1>

      <Bar data={data} />
    </div>
  );
}
