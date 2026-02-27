import React from "react";
import { Monitor, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "../../ui/button";
import { deviceStats } from "../../../data/mockData";

interface MiniStatProps {
  label: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down";
}

const MiniStat: React.FC<MiniStatProps> = ({ label, value, change, trend }) => {
  const isUp = trend === "up";
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <p className="text-xs text-gray-500 mb-1 font-medium">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-gray-900">
          {value.toLocaleString()}
        </span>
        {change !== undefined && (
          <span
            className={`text-xs flex items-center gap-0.5 ${isUp ? "text-emerald-600" : "text-red-500"}`}
          >
            {isUp ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
            {Math.abs(change)}%
          </span>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-0.5">Compared to last week</p>
    </div>
  );
};

const DeviceManagementWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Monitor size={16} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900 text-sm">
            Device Management Dashboard
          </h3>
        </div>
        <Button size="sm" className="text-xs">
          ✨ Upgrade Plan
        </Button>
      </div>

      {/* Top stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <MiniStat
          label="Number Of Devices"
          value={3836}
          change={15}
          trend="up"
        />
        <MiniStat label="Users" value={3836} change={15} trend="down" />
        <MiniStat label="Emails" value={316} change={23} trend="down" />
        <MiniStat label="Number of Apps" value={316} change={23} trend="down" />
      </div>

      {/* Device breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Plugged/Unplugged */}
        <div className="bg-gray-50 rounded-lg p-3 col-span-1">
          <div className="flex gap-4">
            <div>
              <p className="text-xs text-gray-500">🔌 Plugged</p>
              <p className="text-lg font-bold text-gray-900">
                {deviceStats.plugged.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">🔋 Unplugged</p>
              <p className="text-lg font-bold text-gray-900">
                {deviceStats.unplugged.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-2 flex-wrap">
            {[
              {
                label: `Windows`,
                value: deviceStats.windows,
                color: "bg-blue-500",
              },
              { label: `Mac`, value: deviceStats.mac, color: "bg-gray-800" },
              {
                label: `Linux`,
                value: deviceStats.linux,
                color: "bg-amber-500",
              },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-1">
                <span className={`h-2 w-2 rounded-sm ${d.color}`} />
                <span className="text-xs text-gray-500">
                  {d.value.toLocaleString()} {d.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Active/Offline */}
        <div className="bg-gray-50 rounded-lg p-3 col-span-1">
          <div className="flex gap-4">
            <div>
              <p className="text-xs text-emerald-600">● Active</p>
              <p className="text-lg font-bold text-gray-900">
                {deviceStats.active}
              </p>
            </div>
            <div>
              <p className="text-xs text-red-500">● Offline</p>
              <p className="text-lg font-bold text-gray-900">
                {deviceStats.offline.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-2 flex-wrap text-xs text-gray-500">
            <span>1,403 Organizations</span>
            <span>632 Departments</span>
          </div>
        </div>

        {/* Sent/Received */}
        <div className="bg-gray-50 rounded-lg p-3 col-span-1">
          <div className="flex gap-4">
            <div>
              <p className="text-xs text-gray-500">↑ Sent</p>
              <p className="text-lg font-bold text-gray-900">
                {deviceStats.sent}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">↓ Received</p>
              <p className="text-lg font-bold text-gray-900">
                {deviceStats.received.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-2 flex-wrap text-xs text-gray-500">
            <span>1,403 Read</span>
            <span>632 Unread</span>
          </div>
        </div>

        {/* Downloads */}
        <div className="bg-gray-50 rounded-lg p-3 col-span-1">
          <p className="text-xs text-gray-500 font-medium mb-1">
            Number of Downloads
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              {deviceStats.downloads.total}
            </span>
            <span className="text-xs text-emerald-600 flex items-center gap-0.5">
              <TrendingUp size={11} />
              20%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">Compared to last week</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceManagementWidget;
