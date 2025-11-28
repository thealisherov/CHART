import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Premiums from "../json/premium_subscriptions.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const PremiumSubscriptions = () => {
  const data = {
    labels: Premiums.labels,
    datasets: [
      {
        label: "Premium users",
        data: Premiums.values,
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div className="w-full h-[80vh] flex flex-col">
      <h1 className="bg-[#4AC0FF] py-2 w-full rounded-lg border-b-2 border-blue-700 text-center text-2xl font-semibold shadow mb-3">
        Premium Subscriptions
      </h1>

      {/* Scroll container */}
      <div className="flex-1 w-full overflow-auto">
        
        {/* Chart container - 2.5 barobar katta */}
      
            <Pie
              data={data}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      font: {
                        size: 14,
                      },
                      padding: 20,
                    },
                  },
                },
              }}
            />
        
      </div>
    </div>
  );
};

export default PremiumSubscriptions;