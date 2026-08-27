# thomasmol.com

Thomas Mol's personal portfolio with a built-in CMS. The public site shows one editable portfolio page. CMS accounts are closed, sign in through `/admin`, and all have the same access. Signed-in users edit the homepage inline, upload media, and view revision and audit history.

The app uses SvelteKit, Svelte 5, TypeScript, Tailwind CSS, and Svedit. Better Auth handles CMS sessions and two-factor authentication. PostgreSQL and Drizzle store content and history; S3-compatible object storage holds media. Bun is the package manager, runtime, and deployment target.

## Development

Configure the variables listed in `.env.sample`, then run:

```sh
bun install
bun db:migrate
bun dev
```

Use `bun format`, `bun lint`, and `bun check` before a larger change is complete. Build with `bun run build`.
