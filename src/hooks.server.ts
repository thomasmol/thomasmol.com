import { building } from '$app/env';
import { auth } from '#lib/server/auth.js';
import { redirect } from '@sveltejs/kit';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import type { Handle } from '@sveltejs/kit/hooks';

export const handle: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({ headers: event.request.headers });
	event.locals.session = session?.session ?? null;
	event.locals.user = session?.user ?? null;

	const isAdminRoute = event.route.id?.startsWith('/(admin)/');
	const isLoginRoute = event.route.id === '/(auth)/admin/login';

	if (isLoginRoute && event.locals.user) redirect(303, '/admin');
	if (isAdminRoute && !isLoginRoute && !event.locals.user) redirect(303, '/admin/login');

	return svelteKitHandler({ event, resolve, auth, building });
};
