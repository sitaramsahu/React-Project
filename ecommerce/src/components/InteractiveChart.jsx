import React, { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
];

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = useState("90d");

  const getFilteredData = () => {
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;

    if (timeRange === "30d") daysToSubtract = 30;
    if (timeRange === "7d") daysToSubtract = 7;

    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);

    return chartData.filter((item) => {
      const date = new Date(item.date);
      return date >= startDate;
    });
  };

  const filteredData = getFilteredData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Visitors</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart
          data={filteredData}
          width={600}
          height={300}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
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
          <Area
            type="monotone"
            dataKey="desktop"
            stroke="#8884d8"
            fill="url(#fillDesktop)"
          />
          <Area
            type="monotone"
            dataKey="mobile"
            stroke="#82ca9d"
            fill="url(#fillMobile)"
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
}
