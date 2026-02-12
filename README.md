# ⚡ Killua UI

[![CI](https://github.com/jeanetteobr/killua-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/jeanetteobr/killua-ui/actions)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Killua UI** is a lightweight, modular design system inspired by the one and only Killua Zoldyck from *Hunter x Hunter*. It's built for speed, precision, accessibility, and elegance—just like its namesake.

---

## 🎯 Project Goals

- **Lightweight & Modular**: Build only what you need
- **Thematic & Accessible**: Killua-inspired palette, WCAG-compliant design
- **Composable Components**: Built with scalability and reusability in mind
- **Portfolio Ready**: Building toward a complete set of components for a portfolio site
- **Documented & Extensible**: Live documentation with examples

For a detailed roadmap of upcoming features and development plans, check out our [Roadmap](ROADMAP.md).

---

## 🎨 Design Philosophy

Like Killua's lightning-fast movements and precise techniques, our components are:

- **Fast & Light**: Minimal dependencies, optimized performance
- **Clean & Simple**: Uncluttered interfaces, intuitive patterns
- **Adaptable**: Easy to theme and customize (dark/light/system)
- **Accessible**: WCAG-compliant, keyboard-friendly
- **Consistent**: Predictable behavior, unified design language

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:jeanetteobr/killua-ui.git
cd killua-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open http://localhost:5173 to view the interactive documentation.

---

## 🛠️ Development

### Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── core/            # Core components (Button, Heading, etc.)
│   │   ├── Button/
│   │   ├── Heading/
│   │   ├── ColorSwatch/
│   │   └── index.ts     # Barrel export
│   └── icons/           # Icon components (Sun, Moon, System)
│
├── docs/                # Documentation system
│   ├── components/      # Doc-specific components (Example, PropsTable)
│   ├── layouts/         # DocsLayout, DocsSidebar
│   └── pages/           # Component documentation pages
│
├── theme/               # Theme system
│   ├── ThemeContext.ts  # React context for theming
│   ├── useTheme.tsx     # ThemeProvider and useTheme hook
│   └── types.ts         # Theme type definitions
│
├── tokens/              # Design tokens
│   ├── colors.ts        # Color palette and themes
│   ├── typography.ts    # Font families, sizes, weights
│   ├── spacing.ts       # Spacing scale
│   ├── elevation.ts     # Shadow and depth
│   ├── radii.ts         # Border radius values
│   └── breakpoints.ts   # Responsive breakpoints
│
├── utils/               # Utility functions
│   └── colorContrast.ts # Color manipulation & WCAG utilities
│
├── styles/              # Global styles
│   └── global.css       # CSS variables and reset
│
└── index.ts             # Main library entry point
```

### Available Scripts

```bash
# Development
npm run dev              # Start development server with docs
npm run build            # Build for production
npm run preview          # Preview production build

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode

# Code Quality
npm run lint             # Check for linting issues

# Component Generation
npm run generate:component ComponentName  # Generate new component with CSS & tests
npm run generate:page PageName            # Generate new page
```

---

## 📦 Components

### Available Now

| Component | Description |
|-----------|-------------|
| **Button** | Action buttons with 8 variants, loading states, and accessibility |
| **Heading** | Semantic headings (h1-h6) with independent visual sizing |
| **ColorSwatch** | Color token visualization |

### Coming Soon

| Component | Category |
|-----------|----------|
| Text | Typography |
| Link | Typography |
| Container | Layout |
| Card | Layout |
| Badge | Data Display |
| Avatar | Data Display |
| Input | Forms |
| Textarea | Forms |
| Navbar | Navigation |
| Footer | Navigation |

> See the [full roadmap](ROADMAP.md) for details.

---

## 🗺️ Roadmap Progress

| Phase | Status |
|-------|--------|
| Phase 1: Foundation | ✅ Complete |
| Phase 2: Portfolio Site MVP | ⏳ In Progress |
| Phase 3: Enhanced Interactions | 📋 Planned |
| Phase 4: Polish & DX | 📋 Planned |

**Current Focus:** Building components needed for a personal portfolio site.

> See the [full roadmap](ROADMAP.md) for details and future plans.

---

## 📚 Documentation

Run `npm run dev` and visit http://localhost:5173/docs for:

- **Getting Started** guide
- **Live component examples** with code snippets
- **Props documentation** for each component
- **Dark/light mode previews**
- **Accessibility notes**

---

## 🎨 Theming

Killua UI supports three theme modes:

- **Dark** (default) - Purple/violet palette on dark backgrounds
- **Light** - Cyan/teal palette on light backgrounds  
- **System** - Automatically matches OS preference

Toggle themes using the button in the top-right corner of the docs.

---

## 💬 Contributing

We love contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get started.

---

## 📄 License

MIT – Use it, fork it, remix it. Just don't be shady.

---

## ⚡️👩🏾‍💻 Created by [@jeanetteobr](https://www.github.com/jeanetteobr)
