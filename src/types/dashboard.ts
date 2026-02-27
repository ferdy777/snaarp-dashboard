// Dashboard widget types
export type WidgetType =
  | "cloud-network"
  | "file-sharing"
  | "active-users"
  | "device-management"
  | "productivity-report"
  | "email-chart"
  | "total-email"
  | "online-users"
  | "app-activity"
  | "web-activity";

export interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export interface DashboardSection {
  id: string;
  title: string;
  widgets: Widget[];
}

export interface StatCardData {
  label: string;
  value: string | number;
  change: number;
  trend: "up" | "down";
}

export interface OnlineUser {
  id: string;
  name: string;
  avatar: string;
  location: string;
  organization: string;
  device: "Windows" | "Mac" | "Linux";
  currentActivity: string;
  activityIcon: string;
  timeUsage: string;
  status: "online" | "offline" | "away";
}

export interface AppActivity {
  id: string;
  name: string;
  icon: string;
  totalUsers: number;
  totalHours: string;
  date: string;
}

export interface CountryData {
  country: string;
  flag: string;
  percentage: number;
  color: string;
}
