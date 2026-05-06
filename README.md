# Buildprint

Reusable engineering solutions library — store, organize and reuse proven full-stack patterns with code, context and version history.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## About

Buildprint is a full-stack web application for collecting and managing reusable engineering solutions. It helps developers store their proven patterns, code blocks, implementation notes, pros and cons, usage context and edge cases in one structured place.

Unlike a basic snippets app, Buildprint focuses on complete reusable solutions: auth flows, pagination patterns, admin tables, upload flows, permissions, queues, email templates, error handling approaches and other practical patterns that can be reused across real projects.

## Features

- **Solution catalog** — organize reusable patterns by categories and tags
- **Code blocks** — save multiple code examples for one solution
- **Rich solution details** — description, where used, when to use, when not to use, pros and cons
- **Quick add** — quickly save a code idea or pattern as a draft
- **Drafts and published solutions** — keep unfinished patterns private until they are ready
- **Search and filters** — find solutions by title, category, tag or description
- **Favorites** — mark frequently used solutions for quick access
- **Version history** — track how a solution evolves over time
- **Private library** — personal workspace for your own engineering knowledge
- **REST API** — clean NestJS endpoints for managing solutions, categories, tags and code blocks

## Pages

| Page | Description |
|---|---|
| **Dashboard** | Overview of recent solutions, favorite items and categories |
| **Solutions** | Full catalog with search, filters and sorting |
| **Solution Details** | Full solution page with description, code blocks, usage notes, pros and cons |
| **Add Solution** | Full form for creating a structured reusable solution |
| **Quick Add** | Minimal form for quickly saving a code block or idea as a draft |
| **Edit Solution** | Update solution details, code blocks, tags and status |
| **Favorites** | Saved solutions for fast access |
| **Categories** | Manage solution groups like Auth, Pagination, Uploads and Permissions |

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework |
| React | UI development |
| TypeScript | Type safety |
| TailwindCSS | Styling |
| React Hook Form | Form handling |
| Zod | Form validation |
| CodeMirror | Code editor for solution code blocks |
| NestJS | Backend framework |
| Prisma | Database ORM |
| PostgreSQL | Data storage |
| JWT / Cookies | Authentication |
| REST API | Client-server communication |

## Data Model

| Entity | Description |
|---|---|
| **User** | Application user and owner of personal solutions |
| **Solution** | Main reusable engineering pattern |
| **CodeBlock** | Code example connected to a solution |
| **Category** | Group for solutions, such as Auth or Uploads |
| **Tag** | Flexible labels for search and filtering |
| **Favorite** | Saved solution for quick access |
| **SolutionVersion** | Snapshot of solution changes over time |

## Example Solution Types

- Auth boilerplate
- JWT refresh token flow
- Protected routes
- Role-based permissions
- Cursor pagination
- Admin tables with filters
- File upload with preview
- Email template flow
- Queue processing pattern
- Error handling strategy
- API layer structure
- Form validation pattern

## Getting Started

```bash
# Install client dependencies
cd client
npm install

# Start frontend
npm run dev

# Install server dependencies
cd ../server
npm install

# Start backend
npm run start:dev
```

```bash
# Run database migrations
cd server
npx prisma migrate dev
```

> Make sure PostgreSQL is running and the server `.env` file contains a valid `DATABASE_URL`.

## Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/buildprint"
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="7d"
CLIENT_URL="http://localhost:3000"
```

## Repository Topics

`nextjs` `react` `typescript` `nestjs` `postgresql` `prisma` `tailwindcss` `fullstack` `developer-tools` `code-snippets` `engineering` `patterns` `knowledge-base` `reusable-components` `personal-library`

## Author

Designed and developed by **Ihor Yanchuk**  
[Portfolio](https://portfolio-v3-coral-theta.vercel.app/) · [GitHub](https://github.com/Vergos1)
