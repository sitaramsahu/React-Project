import { Button } from "@/components/ui/button";
import React from "react";

const Services = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl">ASRS Subscribe Button</h1>{" "}
      <br />
      <div>
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-black to-purple-900 px-4 py-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://asrsnews.in/wp-content/uploads/2024/12/android-chrome-192x192-1.png"
                  alt="ASRS News"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-semibold text-white">
                  ASRS News
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">HT Premium</h2>
              <p className="text-lg text-gray-300">
                Subscribe Now & Dive Deeper with ASRS News
              </p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100" size="lg">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
