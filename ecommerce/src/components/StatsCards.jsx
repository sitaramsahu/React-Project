import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaClipboardList,
  FaQuestion,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

export function StatsCards() {
  const stats = [
    {
      title: "Questionnaires",
      value: "7,690",
      icon: <FaClipboardList size={24} />,
      gradientFrom: "from-blue-300",
      gradientTo: "to-blue-600",
    },
    {
      title: "Questions",
      value: "2,106",
      icon: <FaQuestion size={24} />,
      gradientFrom: "from-orange-200",
      gradientTo: "to-orange-400",
    },
    {
      title: "Question Answers",
      value: "1,325",
      icon: <FaCheckCircle size={24} />,
      gradientFrom: "from-green-200",
      gradientTo: "to-green-500",
    },
    {
      title: "Self Inspection",
      value: "3,269",
      icon: <FaSearch size={24} />,
      gradientFrom: "from-purple-200",
      gradientTo: "to-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <Card key={index} className="rounded-lg shadow-md">
          <CardHeader className="flex items-center space-x-2">
            <div className="text-xl">{stat.icon}</div>
            <CardTitle className="text-gray-600">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent className="relative p-4">
            <h2 className="text-4xl font-semibold">{stat.value}</h2>
            <div
              className={`absolute inset-0 rounded-lg bg-gradient-to-r ${stat.gradientFrom} ${stat.gradientTo} opacity-80`}
              style={{ clipPath: "ellipse(90% 70% at 50% 100%)" }}
            ></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
