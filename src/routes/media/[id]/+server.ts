import { assets } from '#lib/server/db/schema.js';
import { db } from '#lib/server/db/index.js';
import { getStorage } from '#lib/server/storage.js';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const [asset] = await db.select().from(assets).where(eq(assets.id, params.id)).limit(1);
	if (!asset) error(404, 'Asset not found');

	const url = getStorage().presign(asset.objectKey, { method: 'GET', expiresIn: 3600 });
	return new Response(null, {
		status: 302,
		headers: { location: url, 'cache-control': 'public, max-age=3000' }
	});
};
