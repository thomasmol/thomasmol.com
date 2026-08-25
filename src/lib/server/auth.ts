import { BETTER_AUTH_SECRET, BETTER_AUTH_URL } from '$app/env/private';
import { getRequestEvent } from '$app/server';
import { drizzleAdapter } from '@better-auth/drizzle-adapter/relations-v2';
import { betterAuth } from 'better-auth';
import { twoFactor } from 'better-auth/plugins';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { db, schema } from './db/index.js';

export const auth = betterAuth({
	appName: 'Thomas Mol',
	baseURL: BETTER_AUTH_URL,
	secret: BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, { provider: 'pg', schema }),
	emailAndPassword: {
		enabled: true,
		disableSignUp: true
	},
	plugins: [twoFactor({ issuer: 'thomasmol.com' }), sveltekitCookies(getRequestEvent)]
});
