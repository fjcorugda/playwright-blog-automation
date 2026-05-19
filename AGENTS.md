
---

# Phase 9 — AGENTS.md

## What was created
A concise contributor guide for:
- architecture standards
- testing conventions
- locator strategies

## Architecture Decisions
- Practical enterprise-style rules
- Simplicity-first guidance
- Maintainability focused

---

## `AGENTS.md`

```md
# AGENTS.md

## Repository Conventions

- Use TypeScript everywhere
- Keep files feature-based
- Prefer readability over abstraction

---

## Locator Strategy

Priority:
1. data-testid
2. role locators
3. accessible labels

Avoid:
- nth-child
- brittle CSS selectors
- text-only selectors when unstable

---

## Testing Standards

- Tests must be deterministic
- Avoid hard waits
- Prefer Playwright auto-waiting
- Use reusable fixtures

---

## CI Expectations

- Keep workflows lightweight
- Avoid redundant installs
- Optimize for GitHub Free tier

---

## Coding Guidelines

- Small reusable methods
- Consistent naming
- Simple assertions
- Avoid overengineering