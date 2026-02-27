import React from "react";
import { Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { onlineUsers } from "../../../data/mockData";

const statusColors: Record<string, string> = {
  online: "bg-emerald-400",
  away: "bg-amber-400",
  offline: "bg-gray-300",
};

const OnlineUsersWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900 text-sm">Online Users</h3>
        </div>
        <select className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1 focus:outline-none">
          <option>All Organization</option>
        </select>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        View your comprehensive online users
      </p>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Organization</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Current Activity</TableHead>
              <TableHead>Time Usage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {onlineUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Avatar className="h-7 w-7">
                        <AvatarFallback className="text-xs">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={`absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-white ${statusColors[user.status]}`}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
                      {user.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {user.location}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {user.organization}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="text-xs whitespace-nowrap"
                  >
                    {user.device}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{user.activityIcon}</span>
                    <span className="text-xs text-gray-600 whitespace-nowrap">
                      {user.currentActivity}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {user.timeUsage}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OnlineUsersWidget;
