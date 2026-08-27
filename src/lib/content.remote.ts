import { command, form, getRequestEvent, query } from '$app/server';
import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { uploadAsset } from '#lib/server/assets.js';
import { requireAuth } from '#lib/server/auth.js';
import { portfolioDocumentSchema } from '#lib/server/db/schema.js';
import { getHomeDocument, loadOverview, saveHomeDocument } from '#lib/server/documents.js';

export const getHomeContent = query(async () => {
	const event = getRequestEvent();
	const document = await getHomeDocument();
	return {
		document: document.data,
		revision: document.revision,
		canEdit: Boolean(event.locals.user)
	};
});

export const saveHomeContent = command(
	z.object({ data: portfolioDocumentSchema, revision: z.number().int().positive() }),
	async (input) => {
		const event = getRequestEvent();
		const user = requireAuth(event);

		const document = await saveHomeDocument({
			data: input.data,
			revision: input.revision,
			actorId: user.id,
			ipAddress: event.getClientAddress(),
			userAgent: event.request.headers.get('user-agent')
		});

		if (!document) error(409, 'The document changed. Reload before saving again.');
		return { revision: document.revision, updatedAt: document.updatedAt };
	}
);

export const getOverview = query(async () => {
	const event = getRequestEvent();
	const user = requireAuth(event);
	return { user, overview: await loadOverview() };
});

export const uploadMedia = form(z.object({ file: z.file() }), async ({ file }) => {
	const event = getRequestEvent();
	const user = requireAuth(event);

	return uploadAsset({
		file,
		actorId: user.id,
		ipAddress: event.getClientAddress(),
		userAgent: event.request.headers.get('user-agent')
	});
});
