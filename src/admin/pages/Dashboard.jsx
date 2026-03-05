import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

function Dashboard() {
  const [totalInquiries, setTotalInquiries] = useState(0);
  const targetTotal = 45; // Total inquiries

  // Animated counter effect
  useEffect(() => {
    const duration = 1500; // 1.5s
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = targetTotal / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetTotal) current = targetTotal;
      setTotalInquiries(Math.floor(current));

      if (current === targetTotal) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const lineData = {
    labels: ["CCTV installation", "PABX", "CATV"],
    datasets: [
      {
        label: "CCTV installation",
        data: [12, 0, 0],
        borderColor: "#6366f1",
        backgroundColor: "#6366f1",
        tension: 0.4,
        fill: false,
        pointRadius: 6,
      },
      {
        label: "PABX",
        data: [0, 8, 0],
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        tension: 0.4,
        fill: false,
        pointRadius: 6,
      },
      {
        label: "CATV",
        data: [0, 0, 5],
        borderColor: "#f59e0b",
        backgroundColor: "#f59e0b",
        tension: 0.4,
        fill: false,
        pointRadius: 6,
      },
    ],
  };

  const pieData = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        data: [15, 20, 18],
        backgroundColor: ["#6366f1", "#10b981", "#f43f5e"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#64748b" },
      },
    },
    animation: {
      duration: 1200,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div className="dashboard-page">
      <h2 className="page-title">Analytics Overview</h2>

      <div className="stats-grid">
        <div className="stat-card fade-in">
          <h3>Most Requested</h3>
          <p>CCTV installation</p>
        </div>

        <div className="stat-card fade-in delay">
          <h3>Total Inquiries</h3>
          <p className="count-number">{totalInquiries}</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart-card slide-up">
          <Line data={lineData} options={chartOptions} />
        </div>

        <div className="chart-card slide-up delay">
          <Pie data={pieData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;