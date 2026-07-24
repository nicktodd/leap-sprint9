# Module 1 Demo Guide — HTML Fundamentals: Structure, Semantic Elements & Forms

**Duration:** 12 minutes
**Prerequisite:** none — this is the sprint's actual starting point.

This is the first module of the whole program that touches HTML. Say that plainly:
everyone here has written JavaScript (Sprint 8), Java (Sprint 5/6), Python (Sprint 4),
and SQL (Sprint 3) — nobody has necessarily ever looked at what's actually inside a
`.html` file. Today builds the page that Modules 2-4 will style, animate, and wire up
to a real backend.

## Part 1: Two Login Pages, Same Content, No CSS Yet (5 min)

Open `bad-example.html` and `login-page.html` side by side — same visible words
(Mission Control, Log In, Username, Password), zero CSS in either file.

Verified real output (both pages rendered with no stylesheet at all):

- **`bad-example.html`** (every element is a `<div>`, an `onclick` attribute stands in
  for a button, `contenteditable="true"` stands in for text inputs): a wall of
  undifferentiated black text. No visible input boxes. No visible button. Nothing
  distinguishes "Username" the label from "Log In" the (fake) button.
- **`login-page.html`** (`<header>`, `<main>`, `<form>`, `<label>`, real `<input>` and
  `<button>` elements): immediately recognisable as a login form — bordered input
  boxes, a distinct button — with **zero CSS written**. The browser's own default
  styling for real form elements does this for free.

**Land the point**: semantic HTML isn't a style choice, it's information. The browser
(and every tool downstream of it) can only treat something like a text input,
a button, or a heading if the markup actually says so.

### Prove it with the accessibility tree, not just eyes

This is the concrete version of "screen readers can't use div soup" — query each
page's accessibility tree directly (exactly what a screen reader does):

Verified real output, `bad-example.html`:
```
generic
generic
generic "Log In"
```

Verified real output, `login-page.html`:
```
textbox "Username" type="text"
textbox "Password" type="password"
button "Log In" type="submit"
```

The semantic version gives assistive technology (and search engines, and browser
autofill, and password managers) an actual textbox and an actual button. The div-soup
version gives them three anonymous, interactive-in-name-only blobs — `contenteditable`
looks like a text box visually once styled, but it was never actually one.

## Part 2: Forms and Native Validation (7 min)

Walk through `login-page.html`'s form, live:

```html
<label for="username">Username</label>
<input
  type="text"
  id="username"
  name="username"
  required
  minlength="3"
  autocomplete="username"
/>
```

**`<label for="...">` matched to the input's `id`** is not decorative — click the label
text itself and the input focuses. That association is also what a screen reader
announces before reading the input's value.

Submit the form with the username field empty.

Verified real output (the browser's own, unstyled validation bubble):
```
Please fill in this field.
```

Type two characters into username (`minlength="3"`) and submit again.

Verified real output:
```
Please lengthen this text to 3 characters or more (you are currently using 2 characters).
```

**Land the point**: this validation cost zero JavaScript. `required` and `minlength`
are attributes, not code — the browser enforces them and writes its own message.
Module 3 will show what happens when this isn't enough (custom rules, custom
messages); today's job is knowing what the platform already gives you before reaching
for anything else.

## Key message

Every visual and functional advantage `login-page.html` has over `bad-example.html`
came from using the RIGHT element for the job, not from writing more code — often from
writing less. Modules 2-4 build directly on top of this same file: CSS styles it,
JavaScript makes it interactive, `fetch()` wires it to `sprint8-auth-service`'s real
`/login` endpoint.

## Transition to the Lab

Learners build their own version of this login page from an empty file — semantic
structure, a properly labelled form, and native validation attributes — verified the
same way today's demo was: submit it empty, read the browser's own validation message.
