# Snaarp — Drag-and-Drop Dashboard

> Frontend Developer Assessment — Interactive dashboard built with React, TypeScript, Tailwind CSS, and drag-and-drop functionality.

**Live Demo:** https://your-deployment-url.vercel.app
**Repository:** https://github.com/your-username/snaarp-dashboard

---

## Overview

A fully responsive analytics dashboard that allows users to drag and drop widgets and sections to personalise their layout. Built from a provided design spec, translating it pixel-accurately into a functional React application.

---

## Features

- Drag and Drop — Reorder both sections and individual widgets using @hello-pangea/dnd
- Fully Responsive — Mobile-first layout with a hamburger sheet drawer on screens below 1024px; persistent collapsible sidebar on desktop
- Rich Data Widgets — Cloud Network, File Sharing, Active Users, Device Management, Productivity Report, Email Chart, Total Email, Online Users, App Activity, Web Activity
- Design-Accurate Styling — Tailwind CSS with a custom brand colour palette matching the provided design
- Accessible — Keyboard-navigable drag and drop, semantic HTML, ARIA labels
- Modular Architecture — Each widget is an isolated, reusable component with a central WidgetRenderer registry

---

## Tech Stack

| Technology        | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| React 18          | UI framework                                                   |
| TypeScript        | Type safety                                                    |
| Tailwind CSS v4   | Utility-first styling                                          |
| @hello-pangea/dnd | Drag-and-drop (sections + widgets)                             |
| Context API       | Global state (sidebar, sections, widget layout)                |
| shadcn/ui         | Accessible UI primitives (Sheet, Table, Badge, Avatar, Button) |
| Recharts          | Charts (Area, Bar, Pie)                                        |
| Lucide React      | Icon set                                                       |
| Vite              | Build tool and dev server                                      |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- Yarn >= 1.22

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/snaarp-dashboard.git
cd snaarp-dashboard

# 2. Install dependencies
yarn

# 3. Start the development server
yarn dev
```

The app will be available at http://localhost:5173.

### Build for Production

```bash
yarn build
```

Output is in the dist/ folder, ready to deploy.

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx
│   │   └── topbar.tsx
│   ├── dashboard/
│   │   ├── dashboardGrid.tsx
│   │   └── widgetRenderer.tsx
│   ├── widgets/
│   │   ├── cloudNetworkWidget.tsx
│   │   ├── fileSharingWidget.tsx
│   │   ├── activeUsersWidget.tsx
│   │   ├── deviceManagementWidget.tsx
│   │   ├── productivityWidget.tsx
│   │   ├── emailChartWidget.tsx
│   │   ├── totalEmailWidget.tsx
│   │   ├── onlineUsersWidget.tsx
│   │   ├── appActivityWidget.tsx
│   │   └── webActivityWidget.tsx
│   ├── common/
│   │   └── statcard.tsx
│   └── ui/
├── context/
│   └── dashboardContext.tsx
├── data/
│   └── mockData.ts
├── types/
│   └── dashboard.ts
└── App.tsx
```

---

## Drag and Drop Architecture

Drag and drop is implemented with @hello-pangea/dnd using two droppable types:

- SECTION — The outer Droppable wraps all sections; dragging a section header reorders entire rows
- WIDGET — Each section contains a horizontal Droppable; widgets can be reordered within a section or moved between sections

State is managed in DashboardContext with three actions:

- reorderSections
- reorderWidgetsInSection
- moveWidgetBetweenSections

---

## Deployment

Hosted on Vercel. Connected to the GitHub repository for automatic deployments on every push to main.

---

## Challenges

- Drag and drop with CSS Grid layout required applying drag handle props directly to the wrapper div to avoid placeholder sizing issues
- Moving widgets between sections while preserving order needed careful index management in Context state
- Making the layout fully responsive without breaking the desktop drag and drop experience required splitting the sidebar into a persistent desktop version and a Sheet drawer for mobile
