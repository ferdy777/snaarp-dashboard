import React from "react";
import {
  LayoutDashboard,
  Building2,
  BarChart3,
  CreditCard,
  User,
  HardDrive,
  Settings,
  Monitor,
  FileBarChart,
  Users,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useDashboard } from "../../../context/dashboardContext";
import { cn } from "../../../lib/utils";
import { Avatar, AvatarFallback } from "../../ui/avatar";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Building2, label: "Organization & Reg." },
  { icon: BarChart3, label: "Reporting" },
  { icon: CreditCard, label: "Billing" },
  { icon: User, label: "Account" },
  { icon: HardDrive, label: "Storage" },
  { icon: Settings, label: "Settings" },
  { icon: Monitor, label: "Device Management" },
  { icon: FileBarChart, label: "Productivity Report" },
];

const bottomItems = [
  { icon: Users, label: "User Panel" },
  { icon: HelpCircle, label: "Support" },
];

// Extracted nav content so it can be reused in both desktop sidebar and mobile sheet
const SidebarContent: React.FC<{
  collapsed?: boolean;
  onNavClick?: () => void;
}> = ({ collapsed = false, onNavClick }) => (
  <>
    {/* Nav */}
    <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={onNavClick}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left",
            item.active
              ? "bg-blue-500 text-white font-semibold shadow-sm"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          )}
        >
          <item.icon size={18} className="shrink-0" />
          {!collapsed && <span className="truncate">{item.label}</span>}
        </button>
      ))}
    </nav>

    {/* Bottom */}
    <div className="border-t border-gray-100 py-4 px-2 space-y-0.5">
      {bottomItems.map((item) => (
        <button
          key={item.label}
          onClick={onNavClick}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left"
        >
          <item.icon size={18} className="shrink-0" />
          {!collapsed && <span className="truncate">{item.label}</span>}
        </button>
      ))}

      {/* User */}
      <div
        className={cn(
          "flex items-center gap-2 px-2 py-2 mt-2",
          collapsed ? "justify-center" : "",
        )}
      >
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarFallback className="text-xs">CS</AvatarFallback>
        </Avatar>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-xs font-semibold text-gray-800 truncate">
              Chidinma Snaarp
            </p>
            <p className="text-xs text-gray-400 truncate">
              chidinma@example.com
            </p>
          </div>
        )}
      </div>
    </div>
  </>
);

const Sidebar: React.FC = () => {
  const { sidebarCollapsed, toggleSidebar } = useDashboard();

  return (
    <>
      {/* ── Desktop sidebar (hidden on mobile) ── */}
      <aside
        className={cn(
          "hidden lg:flex fixed left-0 top-0 h-screen bg-white border-r border-gray-100 flex-col transition-all duration-300 z-40 shadow-sm",
          sidebarCollapsed ? "w-16" : "w-56",
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          {!sidebarCollapsed && (
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Snaarp
            </span>
          )}
          <button
            onClick={toggleSidebar}
            className="ml-auto p-1 rounded-md hover:bg-gray-100 text-gray-500 transition-colors"
            aria-label="Toggle sidebar"
          >
            {sidebarCollapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>

        <SidebarContent collapsed={sidebarCollapsed} />
      </aside>

      {/* ── Mobile sheet sidebar (visible only on mobile, rendered via Topbar trigger) ── */}
      {/* The Sheet trigger lives in Topbar; we export a MobileSidebar component below */}
    </>
  );
};

/** Separate component rendered inside the Topbar hamburger Sheet */
export const MobileSidebarContent: React.FC<{ onClose?: () => void }> = ({
  onClose,
}) => (
  <div className="flex flex-col h-full bg-white">
    {/* Logo */}
    <div className="flex items-center p-4 border-b border-gray-100 pt-12">
      <span className="text-xl font-bold text-gray-900 tracking-tight">
        Snaarp
      </span>
    </div>
    <SidebarContent onNavClick={onClose} />
  </div>
);

export default Sidebar;
