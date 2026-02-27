import React from "react";
import { Share2, BarChart2, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fileSharingData } from "../../../data/mockData";

const FileSharingWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-2">
          <Share2 size={16} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900 text-sm">File Sharing</h3>
        </div>
        <div className="flex items-center gap-2">
          <BarChart2 size={14} className="text-gray-400" />
          <TrendingUp size={14} className="text-gray-400" />
          <select className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1 focus:outline-none">
            <option>Month</option>
            <option>Week</option>
            <option>Year</option>
          </select>
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        Keep track of files and how they're shared
      </p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={fileSharingData} barSize={6} barGap={2}>
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
          <Bar
            dataKey="public"
            fill="#6366f1"
            radius={[4, 4, 0, 0]}
            name="Public"
          />
          <Bar
            dataKey="anyone"
            fill="#a5b4fc"
            radius={[4, 4, 0, 0]}
            name="Anyone with link"
          />
          <Bar
            dataKey="within"
            fill="#e0e7ff"
            radius={[4, 4, 0, 0]}
            name="Within Organisation"
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex items-center gap-4 mt-3 flex-wrap">
        {[
          { color: "#6366f1", label: "Public" },
          { color: "#a5b4fc", label: "Anyone with link" },
          { color: "#e0e7ff", label: "Within Organisation" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-sm"
              style={{ background: item.color }}
            />
            <span className="text-xs text-gray-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileSharingWidget;
