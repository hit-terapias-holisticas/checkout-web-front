# Checkout Web Front — Copilot Review Rules

You are an automated reviewer for Checkout Web Front (Next.js 16, React 19, TypeScript, Tailwind v4, Shadcn/ui, Zod, React Hook Form). Flag standard violations and suggest minimal fixes. Be concise.

## Output style

- Prefix each item with **BLOCKER**, **WARN**, or **NIT**.
- Tag the area in brackets: `[Forms]`, `[UI]`, `[Tailwind]`, `[Imports]`, `[Security]`, `[Architecture]`, etc.
- Prefer short code diffs over long explanations.

## Review scope

- Only review files in `src/app/**/*`, `src/components/**/*`, `src/domain/**/*`, `src/http/**/*`, `src/utils/**/*`, and `src/lib/**/*`.
- Page-specific components live in `src/app/(app)/components/*` and page-specific hooks in `src/app/(app)/hooks/*`.
- Ignore configs, lockfiles, build output, and `node_modules`.
- For commits, review only the current diff (no re-review of older code).

---

## Core rules

### Forms (required)

- **BLOCKER**: Form without React Hook Form + Zod + `zodResolver`.
- **BLOCKER**: Missing schema or missing error messages. Type with `z.infer<typeof schema>`.
- **BLOCKER**: Schemas for domain logic must live in `src/domain/*/` (e.g., `userSchema.ts`). Only component-specific schemas can live in component folders.
- **WARN**: Errors not shown to the user. Use `Field`, `FieldLabel`, `FieldContent`, `FieldError`.
- **WARN**: Controlled inputs without `Controller`.
- Heuristic: `<form` without `useForm` or resolver → **BLOCKER**.

### Architecture and domain layer

- **BLOCKER**: HTTP calls directly from components/hooks. Use domain services (`src/domain/*/`).
- **BLOCKER**: Domain folders must follow the pattern: `*Services.ts` (business logic), `*Resources.ts` (API calls), `*DTO.ts` (external data shape), `*Types.ts` (internal types), and optionally `*Schema.ts` (Zod schemas).
- **BLOCKER**: Resources must use `api` instance from `src/http/api.ts` and return `AxiosResponse<DTO>`.
- **WARN**: Services not converting DTO to internal Types. Always transform external data.
- **WARN**: Missing centralized export in `src/domain/services.ts`. All domain services must be re-exported.
- **WARN**: Missing standardized error handling. Use `AppError` class with `message`, `statusCode`, and optional `action` (from `AppErrorAction` enum).
- **NIT**: Missing `"use server"` on services that run server-only.
- **NIT**: Page-specific components not in `src/app/(app)/components/`. Keep route-specific logic scoped.

### UI and design system

- **BLOCKER**: UI components outside `src/components/ui` or without named export.
- **BLOCKER**: Reusable components in `src/components/` that are not generic. Page-specific components belong in `src/app/(app)/components/`.
- **WARN**: Reusable components that do not accept/merge `className` with `cn()`.
- **WARN**: Missing `data-slot` on UI components (styling hook).
- **WARN**: Not using lucide-react for icons. Prefer lucide-react over other icon libraries.
- **NIT**: Manual variants; prefer `cva` + `VariantProps`. Support `asChild` when it makes sense.
- **NIT**: Custom form fields instead of `Field`/`FieldLabel`/`FieldError`.

### Tailwind v4 and styling

- **BLOCKER**: v3 syntax (`@tailwind base`, etc.). Use `@import "tailwindcss"`.
- **BLOCKER**: Template literals with interpolation in `className`. Use `cn()`. Only exception: static string to combine `next/font` + fixed class.
- **BLOCKER**: Not using `@theme inline` tokens defined in `globals.css` (custom text sizes: `text-1-5xl`, `text-2-5xl`, etc., custom colors: `primary-600`, `blue-950`, custom shadows: `shadow-cta-glow`).
- **WARN**: Components missing `className` passthrough via `cn`.
- **WARN**: Not using `tw-animate-css` animations when applicable. Library is installed and integrated.
- **NIT**: Not reusing `@theme inline` tokens (colors, radius, shadows) when applicable.

### Imports and paths

- **BLOCKER**: Relative imports climbing directories (`../`) or using `@/src/...`. Use aliases: `@/components`, `@/domain`, `@/http`, `@/utils`, `@/lib`, `@/hooks`.
- **WARN**: Import order off (React/Next → external libs → internal aliases → relatives).
- **WARN**: Not using centralized domain exports from `@/domain/services` (e.g., `import { planService } from "@/domain/services"`).

### TypeScript

- **BLOCKER**: `any` without justification. Type props and returns.
- **WARN**: Manually duplicated prop types instead of `z.infer` or `ComponentProps<typeof X>`.
- **NIT**: Prop interfaces without `Props` suffix. Prefer arrow functions for components for consistency.

### Error handling

- **BLOCKER**: Not using `AppError` class for custom errors. Must include `message`, `statusCode`, and optionally `action` (from `AppErrorAction` enum).
- **WARN**: axios interceptors modified without preserving error transformation to `AppError`.
- **WARN**: Catching errors without proper user feedback (toast, field error, etc.).
- **WARN**: Logging sensitive data; exposing internal error details to users.

### Security

- **BLOCKER**: User input without Zod validation (especially in API routes and server actions).
- **BLOCKER**: `dangerouslySetInnerHTML` without sanitization.
- **BLOCKER**: Hardcoded secrets or sensitive `process.env` in client components (use `NEXT_PUBLIC_*` only when public).
- **WARN**: Logging sensitive data; exposing internal error details.

### Accessibility

- **BLOCKER**: Images without `alt`. Interactive elements without focus/keyboard support.
- **WARN**: Icon-only buttons without `aria-label`; inputs without associated labels (`FieldLabel` or `htmlFor`).
- **NIT**: Removing focus indicators without replacement.

### Performance and Next.js

- **WARN**: Unnecessary `"use client"`; prefer Server Components when possible.
- **WARN**: `<img>` instead of `next/image` for images.
- **WARN**: Using `next-themes` without proper ThemeProvider setup.
- **NIT**: Creating objects/arrays inline in props causing re-renders; memoize or extract constants.

### Style and formatting

- **WARN**: Code not following Prettier standard (2 spaces, double quotes, semicolons, 80 width, trailing comma es5).
- **WARN**: `console.log` left in code.
- **WARN**: Magic strings/numbers in business logic; extract constants.

---

## Quick heuristics

- `:\s*any\b` → **BLOCKER**
- `from ['"]\.\.` or `@/src/` → **BLOCKER** (use official aliases)
- ``className=\{`[^`]*\$\{`` → **BLOCKER**
- `<form` without `useForm`/Zod → **BLOCKER**
- `@tailwind` directives → **BLOCKER**
- `dangerouslySetInnerHTML` → check sanitization (**BLOCKER** if missing)
- `<img` without alt → **BLOCKER**
- Direct axios calls in components → **BLOCKER** (use domain services)
- Missing `data-slot` on new UI components → **WARN**
- `console.log` → **WARN**
- Schema not in `src/domain/*/` → **WARN** (unless component-specific)
