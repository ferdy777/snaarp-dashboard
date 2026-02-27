import type {
  OnlineUser,
  AppActivity,
  CountryData,
  DashboardSection,
} from "../types/dashboard";

export const cloudNetworkStats = [
  { label: "Users", value: "3,836", change: -15, trend: "down" as const },
  { label: "Groups", value: "316", change: 23, trend: "up" as const },
  { label: "Uploads", value: "316", change: 23, trend: "up" as const },
  { label: "Departments", value: "316", change: -23, trend: "down" as const },
];

export const storageData = [
  { name: "Files", value: 25, color: "#6366f1" },
  { name: "Folders", value: 20, color: "#f59e0b" },
  { name: "Videos", value: 15, color: "#10b981" },
  { name: "Apps", value: 20, color: "#3b82f6" },
  { name: "Audios", value: 10, color: "#ec4899" },
  { name: "Miscellaneous", value: 10, color: "#d1d5db" },
];

export const fileSharingData = [
  { month: "JAN", public: 40, anyone: 25, within: 20 },
  { month: "FEB", public: 55, anyone: 30, within: 25 },
  { month: "MAR", public: 45, anyone: 35, within: 22 },
  { month: "APR", public: 60, anyone: 28, within: 30 },
  { month: "MAY", public: 75, anyone: 40, within: 35 },
  { month: "JUN", public: 85, anyone: 50, within: 40 },
  { month: "JUL", public: 70, anyone: 45, within: 38 },
  { month: "AUG", public: 80, anyone: 55, within: 42 },
  { month: "SEP", public: 65, anyone: 38, within: 30 },
  { month: "OCT", public: 72, anyone: 42, within: 35 },
  { month: "NOV", public: 68, anyone: 40, within: 32 },
  { month: "DEC", public: 78, anyone: 48, within: 38 },
];

export const activeUsersCountry: CountryData[] = [
  { country: "United Kingdom", flag: "🇬🇧", percentage: 78, color: "#3b82f6" },
  { country: "Nigeria", flag: "🇳🇬", percentage: 67, color: "#10b981" },
  { country: "UAE", flag: "🇦🇪", percentage: 45, color: "#f59e0b" },
  { country: "Canada", flag: "🇨🇦", percentage: 59, color: "#ef4444" },
  {
    country: "United States of America",
    flag: "🇺🇸",
    percentage: 78,
    color: "#6366f1",
  },
];

export const deviceStats = {
  devices: { total: 3836, change: 15, trend: "up" as const },
  users: { total: 3836, change: -15, trend: "down" as const },
  emails: { total: 316, change: -23, trend: "down" as const },
  apps: { total: 316, change: -23, trend: "down" as const },
  plugged: 1923,
  unplugged: 1913,
  active: 592,
  offline: 3836,
  sent: 592,
  received: 3836,
  windows: 1403,
  mac: 632,
  linux: 1801,
  downloads: { total: 316, change: 20, trend: "up" as const },
};

export const productivityStats = [
  {
    label: "Hours Productivity",
    value: "576 Hrs",
    change: -6,
    trend: "down" as const,
  },
  {
    label: "Days Activity",
    value: "267 Days",
    change: 16,
    trend: "up" as const,
  },
  { label: "Users", value: "3,836", change: -16, trend: "down" as const },
  {
    label: "Web Activity",
    value: "178 Activities",
    change: 16,
    trend: "up" as const,
  },
];

export const emailChartData = [
  { name: "Sent", value: 562, color: "#f59e0b" },
  { name: "Received", value: 832, color: "#6366f1" },
  { name: "Unsent", value: 30, color: "#e5e7eb" },
];

export const totalEmailData = [
  { month: "JAN", sent: 1200, received: 800, unsent: 100 },
  { month: "FEB", sent: 1800, received: 1200, unsent: 150 },
  { month: "MAR", sent: 2200, received: 1600, unsent: 200 },
  { month: "APR", sent: 1600, received: 1100, unsent: 130 },
  { month: "MAY", sent: 2800, received: 2000, unsent: 250 },
  { month: "JUN", sent: 3200, received: 2400, unsent: 280 },
  { month: "JUL", sent: 2600, received: 1900, unsent: 220 },
  { month: "AUG", sent: 3000, received: 2200, unsent: 260 },
  { month: "SEP", sent: 1800, received: 1400, unsent: 160 },
  { month: "OCT", sent: 2400, received: 1800, unsent: 200 },
  { month: "NOV", sent: 2000, received: 1500, unsent: 180 },
  { month: "DEC", sent: 2800, received: 2100, unsent: 240 },
];

export const onlineUsers: OnlineUser[] = [
  {
    id: "1",
    name: "Annette Black",
    avatar: "AB",
    location: "Ottawa, Canada",
    organization: "MSBM, Ottawa",
    device: "Windows",
    currentActivity: "Google Chrome",
    activityIcon: "🌐",
    timeUsage: "3 hours 12 minutes",
    status: "online",
  },
  {
    id: "2",
    name: "Floyd Miles",
    avatar: "FM",
    location: "Lagos, Nigeria",
    organization: "MSBM, Lagos",
    device: "Windows",
    currentActivity: "Instagram",
    activityIcon: "📸",
    timeUsage: "2 hours 8 minutes",
    status: "online",
  },
  {
    id: "3",
    name: "Ronald Richards",
    avatar: "RR",
    location: "Dubai, UAE",
    organization: "MSBM, Dubai",
    device: "Mac",
    currentActivity: "Microsoft Teams",
    activityIcon: "💼",
    timeUsage: "6 hours 45 minutes",
    status: "away",
  },
  {
    id: "4",
    name: "Guy Hawkins",
    avatar: "GH",
    location: "London, UK",
    organization: "MSBM, London",
    device: "Windows",
    currentActivity: "Windows",
    activityIcon: "🪟",
    timeUsage: "1 hour 30 minutes",
    status: "online",
  },
  {
    id: "5",
    name: "Jane Cooper",
    avatar: "JC",
    location: "Frankfurt, Germany",
    organization: "MSBM, Frankfurt",
    device: "Mac",
    currentActivity: "Google Chrome",
    activityIcon: "🌐",
    timeUsage: "9 hours 10 minutes",
    status: "online",
  },
  {
    id: "6",
    name: "Leslie Alexander",
    avatar: "LA",
    location: "Rome, Italy",
    organization: "MSBM, Rome",
    device: "Windows",
    currentActivity: "YouTube",
    activityIcon: "▶️",
    timeUsage: "45 minutes",
    status: "offline",
  },
  {
    id: "7",
    name: "Annette Black",
    avatar: "AB",
    location: "Calgary, Canada",
    organization: "MSBM, Calgary",
    device: "Linux",
    currentActivity: "Opera Mini",
    activityIcon: "🔴",
    timeUsage: "45 minutes",
    status: "away",
  },
  {
    id: "8",
    name: "Floyd Miles",
    avatar: "FM",
    location: "Mumbai, India",
    organization: "MSBM, Mumbai",
    device: "Mac",
    currentActivity: "WhatsApp",
    activityIcon: "💬",
    timeUsage: "45 minutes",
    status: "online",
  },
  {
    id: "9",
    name: "Cody Fisher",
    avatar: "CF",
    location: "Lagos, Nigeria",
    organization: "MSBM, Lagos",
    device: "Windows",
    currentActivity: "Microsoft Teams",
    activityIcon: "💼",
    timeUsage: "45 minutes",
    status: "online",
  },
  {
    id: "10",
    name: "Dianne Russell",
    avatar: "DR",
    location: "London, UK",
    organization: "MSBM, London",
    device: "Linux",
    currentActivity: "YouTube",
    activityIcon: "▶️",
    timeUsage: "45 minutes",
    status: "online",
  },
];

export const appActivityData: AppActivity[] = [
  {
    id: "1",
    name: "Google Chrome",
    icon: "🌐",
    totalUsers: 34,
    totalHours: "3 hours 12 minutes",
    date: "2024-06-26 16:32:49",
  },
  {
    id: "2",
    name: "YouTube",
    icon: "▶️",
    totalUsers: 12,
    totalHours: "2 hours 8 minutes",
    date: "2024-05-26 12:45:41",
  },
  {
    id: "3",
    name: "Microsoft Teams",
    icon: "💼",
    totalUsers: 16,
    totalHours: "6 hours 45 minutes",
    date: "2024-05-21 16:28:21",
  },
  {
    id: "4",
    name: "WhatsApp",
    icon: "💬",
    totalUsers: 49,
    totalHours: "1 hour 30 minutes",
    date: "2024-06-26 15:33:49",
  },
  {
    id: "5",
    name: "Opera Mini",
    icon: "🔴",
    totalUsers: 3,
    totalHours: "9 hours 10 minutes",
    date: "2024-05-21 16:28:21",
  },
  {
    id: "6",
    name: "Instagram",
    icon: "📸",
    totalUsers: 22,
    totalHours: "45 minutes",
    date: "2024-05-26 12:45:41",
  },
];

export const webActivityData = [
  {
    name: "Chrome",
    percentage: 79,
    hours: "5 hours 12 minutes",
    color: "#10b981",
  },
  {
    name: "Gmail",
    percentage: 61,
    hours: "2 hours 24 minutes",
    color: "#ef4444",
  },
  { name: "Firefox", percentage: 40, hours: "40 minutes", color: "#f59e0b" },
  {
    name: "Instagram",
    percentage: 79,
    hours: "5 hours 8 minutes",
    color: "#ec4899",
  },
  {
    name: "x.com",
    percentage: 50,
    hours: "1 hour 8 minutes",
    color: "#1f2937",
  },
  {
    name: "Facebook",
    percentage: 61,
    hours: "3 hours 1 minute",
    color: "#3b82f6",
  },
];

export const initialSections: DashboardSection[] = [
  {
    id: "section-cloud",
    title: "Cloud Network",
    widgets: [
      {
        id: "widget-cloud-stats",
        type: "cloud-network",
        title: "Cloud Network Stats",
        colSpan: 2,
      },
      {
        id: "widget-file-sharing",
        type: "file-sharing",
        title: "File Sharing",
      },
      {
        id: "widget-active-users",
        type: "active-users",
        title: "Active Users",
      },
    ],
  },
  {
    id: "section-device",
    title: "Device Management",
    widgets: [
      {
        id: "widget-device-mgmt",
        type: "device-management",
        title: "Device Management Dashboard",
        colSpan: 2,
      },
    ],
  },
  {
    id: "section-productivity",
    title: "Productivity & Email",
    widgets: [
      {
        id: "widget-productivity",
        type: "productivity-report",
        title: "Productivity Report",
        colSpan: 2,
      },
      { id: "widget-email-chart", type: "email-chart", title: "Email Chart" },
      { id: "widget-total-email", type: "total-email", title: "Total Email" },
    ],
  },
  {
    id: "section-activity",
    title: "User Activity",
    widgets: [
      {
        id: "widget-online-users",
        type: "online-users",
        title: "Online Users",
        colSpan: 2,
      },
      {
        id: "widget-app-activity",
        type: "app-activity",
        title: "App Activity Report",
      },
      {
        id: "widget-web-activity",
        type: "web-activity",
        title: "Web Activity",
      },
    ],
  },
];
