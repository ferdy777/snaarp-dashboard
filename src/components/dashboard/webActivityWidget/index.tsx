import React from "react";
import { Globe } from "lucide-react";
import { webActivityData } from "../../../data/mockData";

const WebActivityWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Globe size={16} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900 text-sm">Web Activity</h3>
        </div>
        <select className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1 focus:outline-none">
          <option>Month</option>
        </select>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        View your comprehensive organizational web report
      </p>

      <div className="space-y-3">
        {webActivityData.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-700">
                {item.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {item.hours}
                </span>
                <span className="text-xs font-semibold text-gray-700 w-7 text-right">
                  {item.percentage}%
                </span>
              </div>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${item.percentage}%`, background: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebActivityWidget;
