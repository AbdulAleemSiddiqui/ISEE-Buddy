# ISEE-Calcolo

ISEE-Calcolo is a responsive conversational web app built with React + TypeScript (Vite) to compute the Italian ISEE (Equivalent Economic Situation Indicator) with 2026 fiscal rules.

## Core objective

- Multi-step conversational form flow (Household, Income, Assets, Real Estate, Result) using Framer Motion for smooth transitions.
- Fiscal calculation engine uses formula:
  - `ISEE = (ISR + (ISP * 0.20)) / P`
- `P` is a dynamic equivalence scale with:
  - base values by household size (1–5) and
  - surcharges: `0.20` per minor child, `0.30` if both parents work.
- Automatic exclusions:
  - Italian Government Bonds (BTP/BOT) are excluded up to `€50,000` from movable capital.
- Real estate franchise:
  - `€120,000` for metropolitan cities.
  - `€91,500` for non-metropolitan cities.

## Features

- Internationalization with several languages (EN, IT, FR, AR, BN) and RTL support for Arabic.
- Global state handling for form data and theme preferences.
- Tailwind UI with dark/light/system mode persistence.
- Lucide icons and shadcn/ui component suite.

## Development

- `npm install`
- `npm run dev`
- `npm run test`

