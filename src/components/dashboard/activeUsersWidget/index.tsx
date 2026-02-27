import React from "react";
import { Users } from "lucide-react";
import { activeUsersCountry } from "../../../data/mockData";

// Simple map placeholder with pins
const MapPlaceholder: React.FC = () => (
  <div
    className="relative bg-gray-100 rounded-lg overflow-hidden"
    style={{ height: 160 }}
  >
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, #e8f4fd 0%, #dbeafe 30%, #eff6ff 60%, #f0fdf4 100%)",
      }}
    />
    {/* Grid lines to simulate map */}
    <svg className="absolute inset-0 w-full h-full" opacity={0.3}>
      {[20, 40, 60, 80, 100, 120, 140].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="100%"
          y2={y}
          stroke="#93c5fd"
          strokeWidth="0.5"
        />
      ))}
      {[30, 60, 90, 120, 150, 180, 210, 240].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="100%"
          stroke="#93c5fd"
          strokeWidth="0.5"
        />
      ))}
    </svg>
    {/* Pins */}
    <div className="absolute top-8 left-16 flex flex-col items-center">
      <div className="bg-brand-600 text-white text-xs px-2 py-0.5 rounded-full shadow-md mb-1">
        Snaarp
      </div>
      <div className="h-3 w-3 bg-brand-600 rounded-full shadow-md border-2 border-white" />
    </div>
    <div className="absolute bottom-10 left-1/2 flex flex-col items-center">
      <div className="h-3 w-3 bg-emerald-500 rounded-full shadow-md border-2 border-white" />
      <div className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md mt-1">
        Online
      </div>
    </div>
    <div className="absolute top-1/2 right-12 flex flex-col items-center">
      <div className="h-3 w-3 bg-red-500 rounded-full shadow-md border-2 border-white" />
      <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md mt-1">
        Summit
      </div>
    </div>
  </div>
);

const ActiveUsersWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900 text-sm">Active Users</h3>
        </div>
        <select className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1 focus:outline-none">
          <option>Month</option>
          <option>Week</option>
        </select>
      </div>

      <MapPlaceholder />

      <div className="mt-4 space-y-2.5">
        {activeUsersCountry.map((item) => (
          <div key={item.country} className="flex items-center gap-2">
            <span className="text-base leading-none">{item.flag}</span>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-700 truncate">
                  {item.country}
                </span>
                <span className="text-xs font-semibold text-gray-700 ml-2 shrink-0">
                  {item.percentage}%
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${item.percentage}%`,
                    background: item.color,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveUsersWidget;
