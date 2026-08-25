import { command, form, getRequestEvent, query } from '$app/server';
import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { uploadAsset } from '#lib/server/assets.js';
import { portfolioDocumentSchema } from '#lib/server/db/schema.js';
import { getAdminOverview, getHomeDocument, saveHomeDocument } from '#lib/server/documents.js';

export const getHomeContent = query(async () => {
	const event = getRequestEvent();
	const document = await getHomeDocument();
	return {
		document: document.data,
		revision: document.revision,
		isAdmin: Boolean(event.locals.user)
	};
});

export const saveHomeContent = command(
	z.object({ data: portfolioDocumentSchema, revision: z.number().int().positive() }),
	async (input) => {
		const event = getRequestEvent();
		if (!event.locals.user) error(401, 'Authentication required');

		const document = await saveHomeDocument({
			data: input.data,
			revision: input.revision,
			actorId: event.locals.user.id,
			ipAddress: event.getClientAddress(),
			userAgent: event.request.headers.get('user-agent')
		});

		if (!document) error(409, 'The document changed. Reload before saving again.');
		return { revision: document.revision, updatedAt: document.updatedAt };
	}
);

export const getAdminContent = query(async () => {
	const event = getRequestEvent();
	if (!event.locals.user) return { user: null, overview: null };
	return { user: event.locals.user, overview: await getAdminOverview() };
});

export const uploadMedia = form(z.object({ file: z.file() }), async ({ file }) => {
	const event = getRequestEvent();
	if (!event.locals.user) error(401, 'Authentication required');

	return uploadAsset({
		file,
		actorId: event.locals.user.id,
		ipAddress: event.getClientAddress(),
		userAgent: event.request.headers.get('user-agent')
	});
});
