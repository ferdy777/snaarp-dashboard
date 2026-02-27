import React from "react";
import { AppWindow } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { appActivityData } from "../../../data/mockData";

const AppActivityWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <AppWindow size={16} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900 text-sm">
            App Activity Report
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1 focus:outline-none">
            <option>All Organization</option>
          </select>
          <select className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1 focus:outline-none">
            <option>Month</option>
          </select>
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        View your comprehensive organizational app report
      </p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Application</TableHead>
            <TableHead>Total Users</TableHead>
            <TableHead>Total Hours</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appActivityData.map((app) => (
            <TableRow key={app.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-base">{app.icon}</span>
                  <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
                    {app.name}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-xs text-gray-600 font-medium">
                  {app.totalUsers}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {app.totalHours}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs text-gray-400 whitespace-nowrap font-mono">
                  {app.date}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppActivityWidget;
