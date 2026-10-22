# Gatherly — Event Management System

Gatherly is a responsive React landing page for an event management platform. It is the frontend foundation for the proposed full-stack project.

## Midterm technologies

- React.js
- Tailwind CSS
- React Router DOM
- React Hooks (`useState`, `useMemo`)
- Responsive UI design

## Available routes

- `/` — landing page
- `/events` — searchable events catalogue
- `/events/:eventTitle` — event details
- `/about` — project overview
- `/contact` — contact form
- `/login` — sign-in form
- `/signup` — account creation form

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The current event data is mock data. Authentication, booking APIs, PostgreSQL, user dashboard and admin dashboard are planned for the final full-stack version.
