import React from "react";
import { Mail, BarChart2, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { totalEmailData } from "../../../data/mockData";

const TotalEmailWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900 text-sm">Total Email</h3>
        </div>
        <div className="flex items-center gap-2">
          <BarChart2 size={14} className="text-gray-400" />
          <TrendingUp size={14} className="text-gray-400" />
          <select className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1 focus:outline-none">
            <option>Month</option>
            <option>Week</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={totalEmailData}>
          <defs>
            <linearGradient id="sentGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="receivedGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              fontSize: 12,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
            }}
          />
          <Area
            type="monotone"
            dataKey="sent"
            stroke="#6366f1"
            fill="url(#sentGrad)"
            strokeWidth={2}
            name="Sent"
          />
          <Area
            type="monotone"
            dataKey="received"
            stroke="#10b981"
            fill="url(#receivedGrad)"
            strokeWidth={2}
            name="Received"
          />
          <Area
            type="monotone"
            dataKey="unsent"
            stroke="#e5e7eb"
            fill="none"
            strokeWidth={1.5}
            name="Unsent"
            strokeDasharray="4 2"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalEmailWidget;
