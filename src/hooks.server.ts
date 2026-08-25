import { building } from '$app/env';
import { auth } from '#lib/server/auth.js';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import type { Handle } from '@sveltejs/kit/hooks';

export const handle: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({ headers: event.request.headers });
	event.locals.session = session?.session ?? null;
	event.locals.user = session?.user ?? null;

	return svelteKitHandler({ event, resolve, auth, building });
};
