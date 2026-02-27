import React, { useState } from "react";
import { Search, Bell, Copy, Menu } from "lucide-react";
import { useDashboard } from "../../../context/dashboardContext";
import { cn } from "../../../lib/utils";
import { Sheet, SheetContent } from "../../ui/sheet";
import { MobileSidebarContent } from "../sidebar";

const Topbar: React.FC = () => {
  const { sidebarCollapsed } = useDashboard();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 h-14 bg-white border-b border-gray-100 flex items-center px-4 gap-4 z-30 transition-all duration-300 shadow-sm",
          // On desktop: offset left based on sidebar width
          "left-0 lg:left-auto",
          sidebarCollapsed ? "lg:left-16" : "lg:left-56",
        )}
      >
        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-md relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search for users, groups or settings"
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-colors"
          />
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {/* Agent code — hidden on small screens */}
          <div className="hidden lg:flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
            <span className="text-xs text-gray-500">Agent Code:</span>
            <span className="text-xs font-mono font-medium text-gray-800">
              G3#5o2j37742y3b38
            </span>
            <Copy
              size={12}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={18} className="text-gray-600" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </header>

      {/* Mobile sidebar sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="left"
          roundedCorners="right"
          className="p-0 w-64 sm:w-72"
        >
          <MobileSidebarContent onClose={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Topbar;
