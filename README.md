# Serveo

Serveo is a restaurant operations and menu experience built with Next.js. The current app includes a restaurant operations landing page, an authentication interface, and a menu browsing demo.

## Routes

| Path | Description |
| --- | --- |
| `/` | Serveo landing page with product features, restaurant solutions, stories, and a demo call to action. |
| `/u` | Authentication screens for login, sign-up, password reset, OTP verification, and password change confirmation. Use the `mode` query parameter to select an initial screen, such as `/u?mode=signup` or `/u?mode=resetPassword`. |
| `/home` | Menu discovery home page. |
| `/home/menus` | Menu listing page. |

## Requirements

- Node.js (LTS recommended)
- pnpm 11 (the package manager declared by this project)

## Getting started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

```bash
pnpm dev      # Start the development server
pnpm build    # Create a production build
pnpm start    # Serve the production build (run pnpm build first)
pnpm lint     # Run ESLint
```

## Project structure

```text
app/                         App Router routes and layouts
components/                  Shared navigation, menu, and UI components
pages/landing/sections/      Landing page sections
pages/menus/                 Menu browsing screens
pages/auth/                  Authentication screens
public/                      Static images, icons, and branding assets
```

The project uses Next.js 16, React 19, TypeScript, and Tailwind CSS 4. App Router route files live under `app/`; reusable interface components and page sections are organized in `components/` and `pages/`.
