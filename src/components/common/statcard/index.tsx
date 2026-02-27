import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../../../lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  change: number;
  trend: "up" | "down";
  chartColor?: string;
  mini?: boolean;
}

// Mini sparkline using SVG
const Sparkline: React.FC<{ trend: "up" | "down"; color: string }> = ({
  trend,
  color,
}) => {
  const upPath = "M0,20 L10,18 L20,15 L30,12 L40,14 L50,10 L60,8";
  const downPath = "M0,8 L10,10 L20,12 L30,14 L40,11 L50,16 L60,20";
  return (
    <svg width="60" height="28" viewBox="0 0 60 28" fill="none">
      <defs>
        <linearGradient id={`grad-${trend}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={trend === "up" ? upPath : downPath}
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  trend,
  mini = false,
}) => {
  const isUp = trend === "up";
  const color = isUp ? "#10b981" : "#ef4444";

  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-100 shadow-sm",
        mini ? "p-3" : "p-4",
      )}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-500 font-medium">{label}</span>
        <Sparkline trend={trend} color={color} />
      </div>
      <div className="flex items-end gap-2">
        <span
          className={cn(
            "font-bold text-gray-900",
            mini ? "text-lg" : "text-2xl",
          )}
        >
          {value}
        </span>
        <div
          className={cn(
            "flex items-center gap-0.5 text-xs font-medium mb-0.5",
            isUp ? "text-emerald-600" : "text-red-500",
          )}
        >
          {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-0.5">Compared to last week</p>
    </div>
  );
};

export default StatCard;
