# 🪀 Killua UI

**Killua UI** is a lightweight, modular design system inspired by the one and only Killua Zoldyck from *Hunter x Hunter*. It's built for speed, precision, accessibility, and elegance—just like its namesake.

---

## 🎯 Project Goals

- **Lightweight & Modular**: Build only what you need
- **Thematic & Accessible**: Killua-inspired palette, WCAG-compliant design
- **Composable Components**: Built with scalability and reusability in mind
- **Framework Friendly**: Designed with React, but exportable for other use cases
- **Documented & Extensible**: Easy to use, easy to contribute

For a detailed roadmap of upcoming features and development plans, check out our [Roadmap](ROADMAP.md).

---

## 🎨 Design Philosophy

Like Killua's lightning-fast movements and precise techniques, our components are:

- **Fast & Light**: Minimal dependencies, optimized performance
- **Clean & Simple**: Uncluttered interfaces, intuitive patterns
- **Adaptable**: Easy to theme and customize
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

---

## 🛠️ Development

### Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── core/            # Core components (Button, Input, etc.)
│   └── tokens/          # Token-specific components (ColorSwatch, etc.)
│
├── pages/               # Page components
│   ├── ColorTokens/     # Color tokens documentation
│   │   ├── index.tsx
│   │   └── ColorTokens.types.ts
│   └── CoreComponents/  # Core components documentation
│       ├── index.tsx
│       └── CoreComponents.types.ts
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
│   └── colorHelpers.ts  # Color manipulation utilities
│
└── styles/              # Global styles
    └── global.css       # Global CSS variables and reset
```

Each directory serves a specific purpose:
- `components/`: Contains all reusable UI components
- `pages/`: Documentation and examples of components/tokens
- `tokens/`: Design system foundations
- `utils/`: Helper functions and utilities
- `styles/`: Global styling and theming

### Available Scripts

```bash
# Development
npm run dev        # Start development server
npm run build     # Build for production
npm run preview   # Preview production build

# Code Quality
npm run lint      # Check for linting issues
npm run lint:fix  # Fix linting issues automatically

# Component Generation
npm run generate:component ComponentName  # Generate new component
npm run generate:page PageName           # Generate new page
```

---

## 🗺️ Mini Roadmap Preview

| Feature                        | Status   |
|--------------------------------|----------|
| Design tokens (light/dark)     | ✅ Done  |
| Theme switching & system theme | ✅ Done  |
| Color contrast compliance      | ✅ Done  |
| Accessible core components     | ✅ Done  |
| Screen reader support          | ⬜ In Progress |
| More components (inputs, etc.) | ⬜ Next  |

> See the [full roadmap](ROADMAP.md) for details and future plans.

---

## 💬 Contributing

We love contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get started.

---

📄 License
MIT – Use it, fork it, remix it. Just don't be shady.

---

## ⚡️👩🏾‍💻 Created by [@jeanetteobr](https://www.github.com/jeanetteobr)
