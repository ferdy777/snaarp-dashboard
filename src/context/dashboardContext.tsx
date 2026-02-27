import React, { createContext, useContext, useState, useCallback } from "react";
import type { DashboardSection, Widget } from "../types/dashboard";
import { initialSections } from "../data/mockData";

interface DashboardContextType {
  sections: DashboardSection[];
  reorderSections: (startIndex: number, endIndex: number) => void;
  reorderWidgetsInSection: (
    sectionId: string,
    startIndex: number,
    endIndex: number,
  ) => void;
  moveWidgetBetweenSections: (
    sourceSectionId: string,
    destSectionId: string,
    sourceIndex: number,
    destIndex: number,
    widget: Widget,
  ) => void;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sections, setSections] = useState<DashboardSection[]>(initialSections);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const reorderSections = useCallback(
    (startIndex: number, endIndex: number) => {
      setSections((prev) => {
        const result = Array.from(prev);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      });
    },
    [],
  );

  const reorderWidgetsInSection = useCallback(
    (sectionId: string, startIndex: number, endIndex: number) => {
      setSections((prev) =>
        prev.map((section) => {
          if (section.id !== sectionId) return section;
          const widgets = Array.from(section.widgets);
          const [removed] = widgets.splice(startIndex, 1);
          widgets.splice(endIndex, 0, removed);
          return { ...section, widgets };
        }),
      );
    },
    [],
  );

  const moveWidgetBetweenSections = useCallback(
    (
      sourceSectionId: string,
      destSectionId: string,
      sourceIndex: number,
      destIndex: number,
      widget: Widget,
    ) => {
      setSections((prev) => {
        return prev.map((section) => {
          if (section.id === sourceSectionId && section.id === destSectionId) {
            const widgets = Array.from(section.widgets);
            widgets.splice(sourceIndex, 1);
            widgets.splice(destIndex, 0, widget);
            return { ...section, widgets };
          }
          if (section.id === sourceSectionId) {
            const widgets = section.widgets.filter((_, i) => i !== sourceIndex);
            return { ...section, widgets };
          }
          if (section.id === destSectionId) {
            const widgets = Array.from(section.widgets);
            widgets.splice(destIndex, 0, widget);
            return { ...section, widgets };
          }
          return section;
        });
      });
    },
    [],
  );

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        sections,
        reorderSections,
        reorderWidgetsInSection,
        moveWidgetBetweenSections,
        sidebarCollapsed,
        toggleSidebar,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboard = (): DashboardContextType => {
  const ctx = useContext(DashboardContext);
  if (!ctx)
    throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
};
