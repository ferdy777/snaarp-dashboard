import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import { GripVertical, ChevronDown } from "lucide-react";
import { useDashboard } from "../../../context/dashboardContext";
import WidgetRenderer from "../widgetRenderer";
import { cn } from "../../../lib/utils";

const DashboardGrid: React.FC = () => {
  const {
    sections,
    reorderSections,
    reorderWidgetsInSection,
    moveWidgetBetweenSections,
  } = useDashboard();

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    if (!destination) return;

    // prevent unnecessary updates
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (type === "SECTION") {
      reorderSections(source.index, destination.index);
      return;
    }

    if (type === "WIDGET") {
      const sourceSectionId = source.droppableId;
      const destSectionId = destination.droppableId;

      if (sourceSectionId === destSectionId) {
        reorderWidgetsInSection(
          sourceSectionId,
          source.index,
          destination.index,
        );
      } else {
        const sourceSection = sections.find((s) => s.id === sourceSectionId);
        const widget = sourceSection?.widgets[source.index];

        if (!widget) return;

        moveWidgetBetweenSections(
          sourceSectionId,
          destSectionId,
          source.index,
          destination.index,
          widget,
        );
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-sections" type="SECTION" direction="vertical">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-6"
          >
            {sections.map((section, sectionIndex) => (
              <Draggable
                key={section.id}
                draggableId={section.id}
                index={sectionIndex}
              >
                {(sectionProvided, sectionSnapshot) => (
                  <div
                    ref={sectionProvided.innerRef}
                    {...sectionProvided.draggableProps}
                    className={cn(
                      "rounded-2xl transition-shadow",
                      sectionSnapshot.isDragging
                        ? "shadow-2xl ring-2 ring-brand-300 bg-white/80 backdrop-blur"
                        : "",
                    )}
                  >
                    {/* Section header */}
                    <div
                      {...sectionProvided.dragHandleProps}
                      className="flex items-center gap-2 mb-3 cursor-grab active:cursor-grabbing select-none group"
                    >
                      <GripVertical
                        size={16}
                        className="text-gray-300 group-hover:text-gray-500 transition-colors shrink-0"
                      />
                      <ChevronDown size={14} className="text-gray-400" />
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        {section.title}
                      </span>
                      <div className="flex-1 h-px bg-gray-100" />
                      <span className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        drag to reorder section
                      </span>
                    </div>

                    {/* Widgets */}
                    <Droppable
                      droppableId={section.id}
                      type="WIDGET"
                      direction="horizontal"
                    >
                      {(widgetProvided, widgetSnapshot) => (
                        <div
                          ref={widgetProvided.innerRef}
                          {...widgetProvided.droppableProps}
                          className={cn(
                            "grid gap-4 min-h-[80px] rounded-xl transition-colors p-1",
                            "grid-cols-1 md:grid-cols-2",
                            widgetSnapshot.isDraggingOver
                              ? "bg-brand-50/50 ring-1 ring-brand-200"
                              : "",
                          )}
                        >
                          {section.widgets.map((widget, widgetIndex) => (
                            <Draggable
                              key={widget.id}
                              draggableId={widget.id}
                              index={widgetIndex}
                            >
                              {(itemProvided, itemSnapshot) => (
                                <div
                                  ref={itemProvided.innerRef}
                                  {...itemProvided.draggableProps}
                                  {...itemProvided.dragHandleProps} // ✅ FIX (prevents layout shift)
                                  className={cn(
                                    "relative group",
                                    widget.colSpan === 2
                                      ? "md:col-span-2"
                                      : "col-span-1",
                                    itemSnapshot.isDragging
                                      ? "shadow-2xl ring-2 ring-brand-400 rounded-xl opacity-95 rotate-1 scale-[1.01]"
                                      : "",
                                  )}
                                >
                                  {/* Visual handle only (no drag props here) */}
                                  <div className="absolute top-3 right-3 z-10 p-1 rounded-md bg-white/80 backdrop-blur-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <GripVertical
                                      size={14}
                                      className="text-gray-400"
                                    />
                                  </div>

                                  <WidgetRenderer widget={widget} />
                                </div>
                              )}
                            </Draggable>
                          ))}

                          {widgetProvided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DashboardGrid;
