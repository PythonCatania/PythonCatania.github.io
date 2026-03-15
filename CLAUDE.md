# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project

Angular 21 static site for the **Python Catania** community, deployed on GitHub Pages at [catania.python.it](https://catania.python.it).

## Coding instructions

All coding instructions are defined in [.github/copilot-instructions.md](.github/copilot-instructions.md).
Read and follow them in full before making any changes.

Key rules at a glance:

- **Standalone components only** — do NOT set `standalone: true` explicitly
- **`ChangeDetectionStrategy.OnPush`** on every `@Component`
- **Signals** for state: `signal()`, `computed()`, `input()`, `output()`
- **`NgOptimizedImage`** for every `<img>` tag
- **`for-of`** loops instead of `forEach`
- **No abbreviations** in variable names (`error` not `err`, `anchor` not `a`)
- **SCSS** for all styles (`.scss` extension throughout)
- **Spec file** required for every new component or service
- Native control flow (`@if`, `@for`, `@switch`) — never `*ngIf` / `*ngFor`

## Project structure

```
src/
  styles.scss                        # Global theme vars + scroll offset
  app/
    app.component.ts/html/scss       # Root component
    components/
      header/                        # Sticky navbar (app-header)
      py-catania/                    # Hero section (app-py-catania)
      meetup/                        # Meetup section (app-meetup)
      contact/                       # Contacts section (app-contact)
      footer/                        # Footer (app-footer)
public/
  images/                            # Static assets (logo, icons)
  CNAME                              # GitHub Pages custom domain
  .nojekyll
```

## Build & dev

```bash
npm start          # dev server (ng serve)
npm run build      # production build → dist/pythoncatania/
```
