import React, { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCards } from "@/components/StatsCards";

// Generate chart data for the last 7 days with four categories
const generateLast7DaysData = () => {
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const formattedDate = date.toISOString().split("T")[0];

    const questionnaires = Math.floor(Math.random() * 300) + 100;
    const questions = Math.floor(Math.random() * 300) + 100;
    const questionAnswers = Math.floor(Math.random() * 100) + 50;
    const selfInspection = Math.floor(Math.random() * 200) + 80;
    data.push({
      date: formattedDate,
      questionnaires,
      questions,
      questionAnswers,
      selfInspection,
    });
  }
  return data;
};

export function InteractiveChart() {
  const [timeRange, setTimeRange] = useState("7d");
  const [chartData] = useState(generateLast7DaysData());

  const getFilteredData = () => {
    const referenceDate = new Date();
    let daysToSubtract = 7;

    if (timeRange === "90d") daysToSubtract = 90;
    if (timeRange === "30d") daysToSubtract = 30;

    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);

    return chartData.filter((item) => {
      const date = new Date(item.date);
      return date >= startDate;
    });
  };

  const filteredData = getFilteredData();

  // Custom Tooltip for all four categories
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length === 4) {
      const total =
        payload[0]?.value +
        payload[1]?.value +
        payload[2]?.value +
        payload[3]?.value;

      const questionnairesPercent = ((payload[0]?.value / total) * 100).toFixed(
        2
      );
      const questionsPercent = ((payload[1]?.value / total) * 100).toFixed(2);
      const questionAnswersPercent = (
        (payload[2]?.value / total) *
        100
      ).toFixed(2);
      const selfInspectionPercent = ((payload[3]?.value / total) * 100).toFixed(
        2
      );

      return (
        <div>
          <div className="bg-white pt-9 rounded shadow-md border">
            <p className="text-sm font-semibold mb-2">
              📅 {payload[0]?.payload?.date}
            </p>
            <div className="mb-1">
              <p className="text-xs text-blue-500">
                📝 <strong>Questionnaires:</strong> {payload[0]?.value} (
                {questionnairesPercent}
                %)
              </p>
            </div>
            <div className="mb-1">
              <p className="text-xs text-orange-500">
                ❓ <strong>Questions:</strong> {payload[1]?.value} (
                {questionsPercent}%)
              </p>
            </div>
            <div className="mb-1">
              <p className="text-xs text-green-500">
                ✅ <strong>Question Answers:</strong> {payload[2]?.value} (
                {questionAnswersPercent}%)
              </p>
            </div>
            <div>
              <p className="text-xs text-red-500">
                🔍 <strong>Self Inspection:</strong> {payload[3]?.value} (
                {selfInspectionPercent}%)
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Self Inspection Overview (Last 7 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart
          data={filteredData}
          width={600}
          height={300}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="fillquestionnaires" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillquestions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient
              id="fillquestionAnswers"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor="#ffbb33" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffbb33" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillselfInspection" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4d4d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff4d4d" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="questionnaires"
            stroke="#8884d8"
            fill="url(#fillquestionnaires)"
          />
          <Area
            type="monotone"
            dataKey="questions"
            stroke="#82ca9d"
            fill="url(#fillquestions)"
          />
          <Area
            type="monotone"
            dataKey="questionAnswers"
            stroke="#ffbb33"
            fill="url(#fillquestionAnswers)"
          />
          <Area
            type="monotone"
            dataKey="selfInspection"
            stroke="#ff4d4d"
            fill="url(#fillselfInspection)"
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
}
