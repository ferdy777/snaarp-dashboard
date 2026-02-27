import React from "react";
import { Mail } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { emailChartData } from "../../../data/mockData";

const EmailChartWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Mail size={16} className="text-gray-500" />
        <h3 className="font-semibold text-gray-900 text-sm">Email Chart</h3>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative h-40 w-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={emailChartData}
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={68}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {emailChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(val, name) => [val, name]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
            <span className="text-xs text-gray-500 font-medium leading-tight">
              Emails
            </span>
            <span className="text-xs text-gray-500 font-medium leading-tight">
              Chart
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {emailChartData.map((item) => (
            <div key={item.name} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: item.color }}
              />
              <span className="text-xs text-gray-500">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 font-medium">TOTAL EMAILS SENT</p>
          <p className="text-2xl font-bold text-gray-900">5,421</p>
        </div>
      </div>
    </div>
  );
};

export default EmailChartWidget;
