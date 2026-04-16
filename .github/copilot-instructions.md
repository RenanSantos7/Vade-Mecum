# Vade Mecum Project Guidelines

## Code Style
- Keep imports grouped and prefer the existing path alias `@/` for `src/` imports.
- Group imports into this sections separated by one blank line:
  - react
  - react-native
  - external libraries (including Expo)
  - internal modules
- Inside groups, sort imports alphabetically (ASCII order) considering the import statement text.
- Use tabs, single quotes, and 80-character lines to match the repository formatting settings.
- Prefer explicit relative imports that match the current codebase conventions.

## Architecture
- Keep route-level UI in `src/pages/` and reusable UI in `src/components/`.
- Keep shared state and providers in `src/contexts/`.
- Keep legal data and content files in `src/dados/`.
- Keep shared TypeScript types in `src/types/`.
- Maintain one responsibility per file; do not mix page composition, reusable UI, and data definitions in the same file unless the file already follows that pattern.

## Conventions
- Preserve the current folder structure and place new code in the closest existing module instead of creating new top-level abstractions.
- When refactoring, split logic by responsibility before adding new features.
- Keep imports standardized across files so the same kind of dependency is imported the same way throughout the project.

### Styling
- Use css modules for styling components, and keep styles co-located with the component files.
- Follow the existing naming conventions for CSS classes and files.

### Testing
- Use Vitest and React Testing Library for unit tests, and Cypress for integration and e2e tests.
- Create `test.tsx` files on the same level as the component files for unit tests.
- For other tests, create the corresponding files on `<rootDir>/__tests__/` folder for integration and e2e tests.

## Build and Test
- Use `npm run build` to validate the production build.
- Use `npm run lint` to check code quality before finalizing changes.