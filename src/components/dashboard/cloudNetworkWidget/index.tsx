import React from "react";
import { Globe, AlertCircle } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import StatCard from "../../common/statcard";
import { Button } from "../../ui/button";
import { cloudNetworkStats, storageData } from "../../../data/mockData";

const CloudNetworkWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Globe size={16} className="text-gray-500" />
        <h2 className="font-semibold text-gray-900 text-sm">Cloud Network</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Stats grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {cloudNetworkStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Storage donut */}
        <div className="bg-white rounded-xl border border-amber-200 p-4 flex flex-col">
          <div className="flex items-start gap-2 mb-3">
            <AlertCircle size={14} className="text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-800">Note</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                You've almost reached your limit. You have used 80% of your
                available storage. Upgrade plan to access more space.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div className="relative h-28 w-28">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={storageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={52}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {storageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(val) => `${val}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-lg font-bold text-gray-900">80%</span>
                <span className="text-xs text-gray-500">Used</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 w-full">
              {storageData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-sm shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs text-gray-500 truncate">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button size="sm" className="mt-3 w-full text-xs" variant="default">
            ✨ Upgrade Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CloudNetworkWidget;
