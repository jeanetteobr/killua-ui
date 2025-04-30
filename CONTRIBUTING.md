# Contributing to Killua UI

Thank you for your interest in contributing! 🎉

## Development Setup
1. Fork and clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

## Creating Components
1. Use the component generator:
   ```bash
   npm run generate:component ComponentName
   ```
2. Follow the established structure:
   - `index.tsx` for the component
   - `ComponentName.types.ts` for types
   - `ComponentName.stories.tsx` for Storybook stories
   - `ComponentName.test.tsx` for tests

## Creating Pages
1. Use the page generator:
   ```bash
   npm run generate:page PageName
   ```
2. Follow the established structure:
   - `index.tsx` for the page
   - `PageName.types.ts` for types
   - `PageName.stories.tsx` for Storybook stories
   - `PageName.test.tsx` for tests

## Making Changes
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

## Pull Request Checklist
- [ ] Code follows the project's style guide
- [ ] Tests have been added/updated
- [ ] Documentation has been updated
- [ ] Changes have been tested in the development environment
- [ ] All checks pass (linting, tests, etc.)

## Reporting Issues
When reporting issues, please include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (browser, OS, etc.)
- Screenshots if applicable

We welcome all contributions—code, documentation, issues, and suggestions!

--- 