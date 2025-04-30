# 🪀 Killua UI

**Killua UI** is a lightweight, modular design system inspired by the one and only Killua Zoldyck from *Hunter x Hunter*. It's built for speed, precision, accessibility, and elegance—just like its namesake.

---

## 🎯 Project Goals

- **Lightweight & Modular**: Build only what you need
- **Thematic & Accessible**: Killua-inspired palette, WCAG-compliant design
- **Composable Components**: Built with scalability and reusability in mind
- **Framework Friendly**: Designed with React, but exportable for other use cases
- **Documented & Extensible**: Easy to use, easy to contribute

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
npm run generate-component ComponentName  # Generate new component
npm run generate-page PageName           # Generate new page
```

### Design Tokens
- [x] Colors
- [x] Spacing
- [x] Typography
- [x] Border Radius
- [x] Elevation
- [x] Breakpoints

### Components
- [x] ColorSwatch
- [x] Button
- [ ] Input
- [ ] Card
- [ ] Modal 
...and more coming soon!

---

## 💬 Contributing

We love contributions! Here's how you can help:

### Development Setup
1. Fork and clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

### Creating Components
1. Use the component generator:
   ```bash
   npm run generate-component ComponentName
   ```
2. Follow the established structure:
   - `index.tsx` for the component
   - `ComponentName.types.ts` for types
   - `ComponentName.stories.tsx` for Storybook stories
   - `ComponentName.test.tsx` for tests

### Making Changes
1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Run linting:
   ```bash
   npm run lint:fix
   ```
4. Commit your changes:
   ```bash
   git commit -m "feat: description of your changes"
   ```
5. Push and create a Pull Request

### Pull Request Checklist
- [ ] Code follows the project's style guide
- [ ] Tests have been added/updated
- [ ] Documentation has been updated
- [ ] Changes have been tested in the development environment
- [ ] All checks pass (linting, tests, etc.)

### Reporting Issues
When reporting issues, please include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (browser, OS, etc.)
- Screenshots if applicable

---

📄 License
MIT – Use it, fork it, remix it. Just don't be shady.

---

## ⚡️👩🏾‍💻 Created by [@jeanetteobr](https://www.github.com/jeanetteobr)
