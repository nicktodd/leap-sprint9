# Fidelity LEAP Program — Sprint 9 Lab Exercises

This repository contains the hands-on lab exercises accompanying **Sprint 9: UI Development
with Angular**, week 9 of the Fidelity LEAP graduate programme.

## Prerequisites

- Node.js 22.22.3+ or 24.15.0+ (the Angular CLI will refuse to run on older Node 22.x patch
  versions) and npm
- Angular CLI (`npm install -g @angular/cli`, or use `npx @angular/cli`)
- TypeScript from Sprint 8 (interfaces, generics, decorators) — assumed, not re-taught
- A working checkout of Sprint 6/7's mission service (Spring Boot) and Sprint 8's
  `sprint8-auth-service` (NestJS) — Modules 7, 8, and 12 make real calls against both
- Docker, and the same `sprint6-postgres` container used in Sprint 8, Module 15
- GitHub Copilot Chat (continuing as a learning aid)

## Coming from Sprint 8

By the end of Sprint 8 the mission had a complete backend: Postgres (Sprint 3) behind a
Spring Boot service (Sprint 5/6/7) authenticated by a real NestJS auth service (Sprint 8),
proven to work end to end with `curl`. Sprint 9 builds the piece that turns that into
something a person can actually use: an Angular front end. See `shared/mission-brief.md`.

## Structure

Each module has its own folder under `demos/`, `labs/`, and `solutions/`, following the same
pattern as every previous sprint.

- `demos/<module>/` — instructor-led demo assets and guides
- `labs/<module>/` — your starter files and the task README for that module
- `solutions/<module>/` — reference solutions (try the lab first!)

## Getting started

1. Clone this repository.
2. `cd` into a module's `labs/<module>/` folder and check that module's README for setup.
3. Work through the modules in order, starting with `labs/01-.../README.md`.

## Modules

| # | Module | Lab |
|---|---|---|
| 1 | The Full Stack So Far & Where Angular Fits | _coming soon_ |
| 2 | Angular Fundamentals: Framework Overview & What Makes It Different from React | _coming soon_ |
| 3 | Angular Project Structure, Dev Server & Build Tooling | _coming soon_ |
| 4 | Components & Templates: Standalone Components & Signals | _coming soon_ |
| 5 | Services & Dependency Injection in Angular | _coming soon_ |
| 6 | HTTP Communication: HttpClient, Observables & Error Handling | _coming soon_ |
| 7 | Connecting to the Spring Boot Backend: First Real API Call | _coming soon_ |
| 8 | OpenAPI-Generated API Clients | _coming soon_ |
| 9 | Reactive Forms: Controls, Validation & Dynamic Forms | _coming soon_ |
| 10 | Form-to-API Patterns: Submitting, Handling Responses & Displaying Errors | _coming soon_ |
| 11 | Routing Fundamentals: Routes, Lazy Loading & Navigation | _coming soon_ |
| 12 | Building Authenticated Flows: Login, JWT Interceptors & Route Guards | _coming soon_ |
| 13 | UX Clarity for Non-Technical Audiences: Error Messages & Loading States | _coming soon_ |
| 14 | Testing Angular: Unit Tests & End-to-End Tests with Playwright | _coming soon_ |
| 15 | Mission Build: Wiring Up Remaining Features & Sprint 9 Wrap-up | _coming soon_ |

## Support

Ask your trainer or Scrum team lead during class, or raise a question in the cohort's usual
support channel.
