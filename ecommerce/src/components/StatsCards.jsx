import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaClipboardList,
  FaQuestion,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export function StatsCards() {
  const stats = [
    {
      title: "Questionnaires",
      value: 7690,
      data: [500, 1200, 2600, 4100, 5300, 6100, 7200, 7690], // Chart Data
      icon: <FaClipboardList size={24} />,
      gradientFrom: "from-blue-300",
      gradientTo: "to-blue-600",
    },
    {
      title: "Questions",
      value: 2106,
      data: [200, 400, 800, 1200, 1700, 1900, 2050, 2106],
      icon: <FaQuestion size={24} />,
      gradientFrom: "from-orange-200",
      gradientTo: "to-orange-400",
    },
    {
      title: "Question Answers",
      value: 1325,
      data: [100, 250, 500, 750, 1000, 1200, 1300, 1325],
      icon: <FaCheckCircle size={24} />,
      gradientFrom: "from-green-200",
      gradientTo: "to-green-500",
    },
    {
      title: "Self Inspection",
      value: 3269,
      data: [300, 800, 1500, 2100, 2700, 3000, 3200, 3269],
      icon: <FaSearch size={24} />,
      gradientFrom: "from-purple-200",
      gradientTo: "to-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
}

function StatCard({ stat }) {
  const [count, setCount] = useState(0);
  const chartRef = useRef(null);

  // Counter Animation
  useEffect(() => {
    let start = 0;
    const end = stat.value;
    if (start === end) return;

    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [stat.value]);

  // Line Chart Data
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(0, 86, 179, 0.6)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const chartData = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: stat.title,
        data: stat.data,
        borderColor: "#0056B3",
        borderWidth: 2,
        pointBackgroundColor: "#0056B3",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "rgba(200, 200, 200, 0.3)" } },
    },
  };

  return (
    <>
      <div className="">
        <Card className="rounded-lg shadow-md">
          <CardHeader className="flex items-center space-x-2">
            <div className="text-xl">{}</div>
            <CardTitle className="text-gray-600">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent className="relative p-4">
            <h2 className="text-4xl font-semibold">{count.toLocaleString()}</h2>
            <div
              className={`absolute inset-0 rounded-lg bg-gradient-to-r ${stat.gradientFrom} ${stat.gradientTo} opacity-80`}
              style={{ clipPath: "ellipse(90% 70% at 50% 100%)" }}
            ></div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-44 ml-[-300px]">
        <Card>
          <CardHeader className="flex items-center space-x-2">
            <div className="text-xl">{}</div>
            <CardTitle className="text-gray-600">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent className="relative p-4 h-32">
            <Line
              // ref={chartRef}
              data={chartData}
              options={chartOptions}
              height={100}
              width={200}
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-transparent opacity-80"></div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
