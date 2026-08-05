# Lab 6 — holdings-list.component.ts Annotation

## Line-by-line breakdown

| Line(s) | Bucket | Notes |
|---------|--------|-------|
| `import { Component, inject, signal, effect }` | New — Angular-specific | `Component` and `inject` are Angular DI; `signal` and `effect` are Angular's reactivity primitives (new in Angular 17+) |
| `import { Router }` | New — Angular-specific | Angular's built-in navigation service |
| `interface Holding { ... }` | Already known (TypeScript) | Plain TS interface, same as Sprint 8 |
| `@Component({ selector, standalone, template })` | New — Angular-specific | The decorator that turns a class into a component; `standalone: true` means no NgModule needed |
| `` selector: 'app-holdings-list' `` | New — Angular-specific | The custom HTML tag name used to embed this component |
| `template: \`...\`` | New — Angular-specific | Inline template; Angular compiles this at build time |
| `@for (holding of holdings(); track holding.ticker)` | New — Angular-specific | Angular's built-in control flow (`@for` block, Angular 17+); `track` is required for efficient DOM diffing |
| `{{ holding.ticker }}: {{ holding.quantity }}` | New — Angular-specific | Interpolation — same concept as React's `{expr}` but with double curly braces |
| `(click)="goToOrders()"` | New — Angular-specific | Event binding — equivalent to React's `onClick={goToOrders}` |
| `private router = inject(Router)` | New — Angular-specific | Functional DI with `inject()` — replaces constructor injection; cleaner in standalone components |
| `holdings = signal<Holding[]>([])` | New — Angular-specific | A signal is Angular's reactive state primitive; reading it with `holdings()` (as a function call) registers a reactive dependency |
| `effect(() => { ... })` | New — Angular-specific | Runs the callback whenever any signal it reads changes — Angular's equivalent of React's `useEffect` with automatic dependency tracking |
| `goToOrders(): void` | Already known (TypeScript) | Plain typed method |
| `this.router.navigate(['/orders'])` | New — Angular-specific | Programmatic navigation using the Router service |

## Key Angular vs React differences spotted

- **Signals vs useState**: Angular signals use `signal(value)` to create and `value()` (call) to read — React uses `const [value, setValue] = useState()`
- **Templates vs JSX**: Angular templates are a separate string (or file) compiled at build time; React uses JSX inline in the return
- **`inject()` vs hooks**: Angular's `inject()` for DI has no equivalent hook concept — services are singletons provided by Angular's injector tree
- **`@for` vs `.map()`**: Angular's control flow is built into the template language; React uses plain JS array methods in JSX
