import React from "react";
import { Outlet } from "react-router-dom";
import { DocsSidebar } from "./DocsSidebar";
import "./DocsLayout.css";

export const DocsLayout: React.FC = () => {
  return (
    <div className="docs-layout">
      <DocsSidebar />
      <main className="docs-content">
        <Outlet />
      </main>
    </div>
  );
};
