import IconExporter from "@/components/IconExporter";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="text-black text-center font-bold mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          My Icon Page
        </h1>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-blue-950 text-lg sm:text-2xl font-bold">
          Icon Of The Day
        </h3>
        <p className="text-gray-600 text-sm sm:text-lg font-semibold">
          Download some lucide Icon!
        </p>
      </div>
      <IconExporter />
    </div>
  );
};

export default Dashboard;
