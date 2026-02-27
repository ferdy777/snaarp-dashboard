import React from "react";
import { DashboardProvider, useDashboard } from "./context/dashboardContext";
import Sidebar from "./components/layout/sidebar";
import Topbar from "./components/layout/topbar";
import DashboardGrid from "./components/dashboard/dashboardGrid";
import { cn } from "./lib/utils";

const DashboardContent: React.FC = () => {
  const { sidebarCollapsed } = useDashboard();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Topbar />
      <main
        className={cn(
          "transition-all duration-300 pt-14",
          // On mobile: no left padding (no persistent sidebar)
          // On desktop: offset based on sidebar state
          "pl-0",
          sidebarCollapsed ? "lg:pl-16" : "lg:pl-56",
        )}
      >
        <div className="p-4 lg:p-6 max-w-[1400px] mx-auto">
          {/* Page header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-xs text-gray-400 mt-0.5">
                Drag sections or widgets to rearrange your dashboard
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-brand-600 bg-brand-50 rounded-lg px-3 py-2 border border-brand-100 self-start sm:self-auto">
              <span className="text-base">💡</span>
              <span>
                Hover over any widget and grab the <strong>⣿</strong> handle to
                drag & reorder
              </span>
            </div>
          </div>

          <DashboardGrid />
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
};

export default App;
