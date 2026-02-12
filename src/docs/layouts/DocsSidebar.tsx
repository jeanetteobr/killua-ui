import React from "react";
import { NavLink } from "react-router-dom";
import "./DocsSidebar.css";

interface NavSection {
  title: string;
  items: { label: string; path: string }[];
}

const navigation: NavSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Getting Started", path: "/docs" },
      { label: "Design Tokens", path: "/docs/tokens" },
    ],
  },
  {
    title: "Typography",
    items: [
      { label: "Heading", path: "/docs/components/heading" },
      { label: "Text", path: "/docs/components/text" },
      { label: "Link", path: "/docs/components/link" },
    ],
  },
  {
    title: "Actions",
    items: [
      { label: "Button", path: "/docs/components/button" },
    ],
  },
  {
    title: "Layout",
    items: [
      { label: "Container", path: "/docs/components/container" },
      { label: "Card", path: "/docs/components/card" },
      { label: "Divider", path: "/docs/components/divider" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { label: "Badge", path: "/docs/components/badge" },
      { label: "Avatar", path: "/docs/components/avatar" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { label: "Navbar", path: "/docs/components/navbar" },
      { label: "Footer", path: "/docs/components/footer" },
    ],
  },
  {
    title: "Forms",
    items: [
      { label: "Input", path: "/docs/components/input" },
      { label: "Textarea", path: "/docs/components/textarea" },
    ],
  },
];

export const DocsSidebar: React.FC = () => {
  return (
    <aside className="docs-sidebar">
      <div className="docs-sidebar__header">
        <NavLink to="/" className="docs-sidebar__logo">
          <span className="docs-sidebar__logo-icon">⚡</span>
          <span className="docs-sidebar__logo-text">Killua UI</span>
        </NavLink>
      </div>
      
      <nav className="docs-sidebar__nav">
        {navigation.map((section) => (
          <div key={section.title} className="docs-sidebar__section">
            <h3 className="docs-sidebar__section-title">{section.title}</h3>
            <ul className="docs-sidebar__list">
              {section.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `docs-sidebar__link ${isActive ? "docs-sidebar__link--active" : ""}`
                    }
                    end={item.path === "/docs"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
