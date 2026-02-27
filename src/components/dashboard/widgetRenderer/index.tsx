import React from "react";
import type { Widget } from "../../../types/dashboard";
import CloudNetworkWidget from "../cloudNetworkWidget";
import FileSharingWidget from "../fileSharingWidget";
import ActiveUsersWidget from "../activeUsersWidget";
import DeviceManagementWidget from "../deviceManagementWidget";
import ProductivityWidget from "../productivityWidget";
import EmailChartWidget from "../emailChartWidget";
import TotalEmailWidget from "../totalEmailWidget";
import OnlineUsersWidget from "../onlineUsersWidget";
import AppActivityWidget from "../appActivityWidget";
import WebActivityWidget from "../webActivityWidget";

interface WidgetRendererProps {
  widget: Widget;
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  switch (widget.type) {
    case "cloud-network":
      return <CloudNetworkWidget />;
    case "file-sharing":
      return <FileSharingWidget />;
    case "active-users":
      return <ActiveUsersWidget />;
    case "device-management":
      return <DeviceManagementWidget />;
    case "productivity-report":
      return <ProductivityWidget />;
    case "email-chart":
      return <EmailChartWidget />;
    case "total-email":
      return <TotalEmailWidget />;
    case "online-users":
      return <OnlineUsersWidget />;
    case "app-activity":
      return <AppActivityWidget />;
    case "web-activity":
      return <WebActivityWidget />;
    default:
      return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <p className="text-sm text-gray-500">Unknown widget: {widget.type}</p>
        </div>
      );
  }
};

export default WidgetRenderer;
