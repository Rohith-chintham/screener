import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const ChartDisplay = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [{
      label: 'Stock Price (₹)',
      data: data.map(d => d.price),
      borderColor: '#2563eb',
      tension: 0.3
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      y: { beginAtZero: false }
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartDisplay;
