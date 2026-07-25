# Fidelity LEAP Program — Sprint 9 Lab Exercises

This repository contains the hands-on lab exercises accompanying **Sprint 9: UI Development
with Angular**, week 9 of the Fidelity LEAP graduate programme.

## Prerequisites

- Node.js 22.22.3+ or 24.15.0+ (the Angular CLI will refuse to run on older Node 22.x patch
  versions) and npm
- Angular CLI (`npm install -g @angular/cli`, or use `npx @angular/cli`)
- TypeScript from Sprint 8 (interfaces, generics, decorators) — assumed, not re-taught
- No prior HTML, CSS, or browser JavaScript experience assumed — Day 1 builds this from
  zero, before Angular is introduced at all
- A working checkout of Sprint 6/7's mission service (Spring Boot) and Sprint 8's
  `sprint8-auth-service` (NestJS) — Modules 4, 5, 11, and 12 make real calls against both
- Docker, and the same `sprint6-postgres` container used in Sprint 8, Module 15
- GitHub Copilot Chat (continuing as a learning aid)

## Coming from Sprint 8

By the end of Sprint 8 the mission had a complete backend: Postgres (Sprint 3) behind a
Spring Boot service (Sprint 5/6/7) authenticated by a real NestJS auth service (Sprint 8),
proven to work end to end with `curl`. Sprint 9 builds the piece that turns that into
something a person can actually use: an Angular front end. See `shared/mission-brief.md`.

Sprint 8 taught JavaScript and TypeScript entirely in a Node.js context — no HTML, no CSS,
no DOM, no browser. Day 1 of this sprint (Modules 1-4) closes that gap with real,
hands-on HTML/CSS/browser-JS work before Angular is introduced in Module 6.

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
| 1 | HTML Fundamentals: Structure, Semantic Elements & Forms | [labs/01-html-fundamentals-structure-semantic-elements-and-forms/README.md](labs/01-html-fundamentals-structure-semantic-elements-and-forms/README.md) |
| 2 | CSS Fundamentals: Selectors, the Box Model & Layout | [labs/02-css-fundamentals-selectors-the-box-model-and-layout/README.md](labs/02-css-fundamentals-selectors-the-box-model-and-layout/README.md) |
| 3 | JavaScript in the Browser: The DOM, Events & the Window Object | [labs/03-javascript-in-the-browser-the-dom-events-and-the-window-object/README.md](labs/03-javascript-in-the-browser-the-dom-events-and-the-window-object/README.md) |
| 4 | Fetch & Browser HTTP: Calling a Real API Without a Framework | [labs/04-fetch-and-browser-http-calling-a-real-api-without-a-framework/README.md](labs/04-fetch-and-browser-http-calling-a-real-api-without-a-framework/README.md) |
| 5 | The Full Stack So Far & Where Angular Fits | [labs/05-the-full-stack-so-far-and-where-angular-fits/README.md](labs/05-the-full-stack-so-far-and-where-angular-fits/README.md) |
| 6 | Angular Fundamentals: Framework Overview & What Makes It Different from React | _coming soon_ |
| 7 | Angular Project Structure, Dev Server & Build Tooling | _coming soon_ |
| 8 | Components & Templates: Standalone Components & Signals | _coming soon_ |
| 9 | Services & Dependency Injection in Angular | _coming soon_ |
| 10 | HTTP Communication: HttpClient, Observables & Error Handling | _coming soon_ |
| 11 | Connecting to the Spring Boot Backend: First Real API Call | _coming soon_ |
| 12 | OpenAPI-Generated API Clients | _coming soon_ |
| 13 | Reactive Forms: Building, Submitting & Handling Responses | _coming soon_ |
| 14 | Routing Fundamentals: Routes, Lazy Loading & Navigation | _coming soon_ |
| 15 | Building Authenticated Flows: Login, JWT Interceptors & Route Guards | _coming soon_ |
| 16 | Testing Angular: Unit Tests & End-to-End Tests with Playwright | _coming soon_ |
| 17 | Mission Build: Wiring Up Remaining Features, UX Review & Sprint 9 Wrap-up | _coming soon_ |

## Support

Ask your trainer or Scrum team lead during class, or raise a question in the cohort's usual
support channel.
