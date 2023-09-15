## Kanban app built with React , Tailwind and Zustand.

_Note: Packages used in this project are installed with npm and using yarn or other package managers might lead to a conflict between lock files._

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
|   |   ├── Country.tsx
|   |   ├── Filter.tsx
|   |   ├── Grid.tsx
│   │   └── Header.tsx
│   ├── data/
│   |   └── data.json
|   ├── styles/
|   |   ├── partials/
|   |   |   ├── _country.scss
|   |   |   ├── _filter.scss
|   |   |   ├── _grid.scss
|   |   |   ├── _header.scss
│   |   │   └── _infoPage.scss
|   |   ├── styles.css
|   |   ├── styles.css.map
│   |   └── styles.scss
|   ├── utils/
│   |   └── formatThousands.ts
|   ├── HomePage.tsx
|   ├── InfoPage.tsx
|   ├── main.tsx
│   └── routes.tsx
└── node_moduels
```

## Installation

All the commands below are run from the root of the project, from a terminal:
|Command|Action|
|:-|:-|
|npm i|Installs dependencies|
|npm run dev| Starts local dev server at localhost:3000|
|npm run build| Build your production site to ./dist/
|npm run preview | Preview your build locally, before deploying|
