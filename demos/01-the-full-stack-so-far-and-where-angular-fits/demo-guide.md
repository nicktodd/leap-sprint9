# Module 1 Demo Guide — The Full Stack So Far & Where Angular Fits

**Duration:** 10 minutes
**Prerequisite:** `sprint6-postgres` running with the Sprint 3 schema, Sprint 6/7's mission
service, and Sprint 8's `sprint8-auth-service`.

This module has no new code, no new service, and no Angular anywhere yet. Say that
explicitly: the whole point is proving the other three boxes already work, together,
for real — so learners spend the rest of the sprint building the ONE piece that's
missing, not wondering whether the pieces it will call actually function.

## The Whole Stack, End to End (10 min)

```bash
# No token
curl -X POST http://localhost:8081/accounts/1/orders \
  -H "Content-Type: application/json" \
  -d '{"ticker":"ULVR.L","instrumentType":"EQUITY","quantity":1,"price":40.0,"side":"BUY"}'
```

Verified real output:

```
401
```

```bash
# Login - Sprint 8's real auth service, not a stub
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" \
  -d '{"username":"alice","password":"mission123"}'
```

Verified real output:

```
{"accessToken":"eyJhbGciOiJIUzI1NiIs...","refreshToken":"38dc6b8fdf80bb9b..."}
```

```bash
# That token, against the real Spring Boot mission service
curl -H "Authorization: Bearer $TOKEN" -X POST http://localhost:8081/accounts/1/orders \
  -H "Content-Type: application/json" \
  -d '{"ticker":"ULVR.L","instrumentType":"EQUITY","quantity":1,"price":40.0,"side":"BUY"}'
```

Verified real output:

```
{"status":"ACCEPTED","fee":0.04,"newHoldingQuantity":502.0}
```

```bash
# Not just trusting the HTTP response
docker exec sprint6-postgres psql -U postgres -d mission -c \
  "SELECT h.account_id, i.ticker, h.quantity FROM holdings h JOIN instruments i ON h.instrument_id=i.instrument_id WHERE h.account_id=1 AND i.ticker='ULVR.L';"
```

Verified real output:

```
 account_id | ticker | quantity
------------+--------+----------
          1 | ULVR.L |  502.0000
```

**Land the point**: every one of these four steps is real — a real Postgres row, a real
signed JWT, a real Spring Boot security filter. Nothing here is a mock, a stub, or a
diagram. The ONLY thing standing between this working system and something a trader
could actually use is a UI. That gap is what Sprint 9 closes.

## Where Angular Fits

Draw the picture live: **Browser → Angular app → sprint8-auth-service → mission service
→ Postgres**, then walk backward through what already exists at each box:

- **Postgres**: Sprint 3. Untouched since.
- **Mission service**: Sprint 5/6/7. Untouched since Sprint 6, Module 13.
- **sprint8-auth-service**: Sprint 8. Untouched since Sprint 8, Module 15.
- **Angular app**: doesn't exist. Everything from here to the end of the sprint builds
  it.

Map the rest of the sprint onto that one new box, briefly: components and signals hold
what's on screen (Module 4); services and `HttpClient` make the calls just demonstrated,
from code instead of a terminal (Modules 5-7); an OpenAPI-generated client replaces the
hand-written version (Module 8); reactive forms replace typing JSON by hand (Modules
9-10); routing gives the app more than one screen (Module 11); and Module 12 rebuilds
this exact `curl` sequence — login, attach token, call a protected route — as real,
running Angular code.

## Key message

Nothing in this stack is aspirational. Every claim in `shared/mission-brief.md` about
what already works is one this demo just proved, live, with real output — Angular's job
this sprint is narrower and more concrete because of that: put a face on something that
already works, not build something new and hope it works.

## Transition to the Lab

In pairs, learners trace this same four-step flow themselves on a whiteboard, adding
the Angular app as a fifth box and working out exactly what it sends and receives at
each hop — before writing a single line of Angular code.
