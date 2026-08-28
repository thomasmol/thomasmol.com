# Project

- Thomas Mol's personal portfolio with a built-in CMS
- The public site is one read-only portfolio page for visitors
- CMS accounts are closed and all signed-in users have the same access
- Signed-in users edit the homepage inline; `/admin` provides media, revision, audit, and settings tools
- This is one website, not a SaaS or multi-tenant product

## Stack

- SvelteKit with Svelte 5 runes, TypeScript, and Tailwind CSS
- Svedit for structured inline content editing
- Better Auth for email, password, session, and two-factor authentication
- PostgreSQL and Drizzle for content, revisions, assets, audit logs, and auth data
- S3-compatible object storage for uploaded media
- Bun for packages, runtime, scripts, and deployment
- Oxfmt and Oxlint for formatting and linting

## Work

- Use Tailwind classes for all styling
- Keep the site simple
- Edit files directly
- Do not add tests unless requested
- Inspect package.json to understand project deps, stack and scripts
- For database changes, edit the Drizzle schema, generate a migration with the `drizzle-kit generate` command, review its SQL, then migrate

## Commands

- `bun format`: Format the code
- `bun lint`: Lint the code
- `bun check`: Run svelte-check

Run these at useful checkpoints, not after every small change.
