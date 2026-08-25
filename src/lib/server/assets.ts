import { db } from './db/index.js';
import { assets, auditLogs } from './db/schema.js';
import { getStorage } from './storage.js';

const MAX_IMAGE_BYTES = 20 * 1024 * 1024;
const MAX_VIDEO_BYTES = 500 * 1024 * 1024;

export async function uploadAsset(input: {
	file: File;
	actorId: string;
	ipAddress: string | null;
	userAgent: string | null;
}) {
	const isImage = input.file.type.startsWith('image/');
	const isVideo = input.file.type.startsWith('video/');
	if (!isImage && !isVideo) throw new Error('Only image and video files are accepted');
	if (input.file.size > (isImage ? MAX_IMAGE_BYTES : MAX_VIDEO_BYTES)) throw new Error('File is too large');

	const id = crypto.randomUUID();
	const storage = getStorage();
	let body: Blob = input.file;
	let mimeType = input.file.type;
	let width: number | null = null;
	let height: number | null = null;
	let extension = 'mp4';

	if (input.file.type === 'video/webm') extension = 'webm';
	if (input.file.type === 'video/quicktime') extension = 'mov';

	if (isImage) {
		const image = new Bun.Image(await input.file.arrayBuffer(), { maxPixels: 4096 * 4096, autoOrient: true });
		const metadata = await image.metadata();
		width = Math.min(metadata.width, 2048);
		height = Math.round(metadata.height * (width / metadata.width));
		body = await image.resize(2048, 2048, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).blob();
		mimeType = 'image/webp';
		extension = 'webp';
	}

	const objectKey = `media/${id}.${extension}`;
	await storage.write(objectKey, body, { type: mimeType });

	const [asset] = await db.transaction(async (tx) => {
		const inserted = await tx
			.insert(assets)
			.values({
				id,
				objectKey,
				originalName: input.file.name,
				mimeType,
				bytes: body.size,
				width,
				height,
				createdBy: input.actorId
			})
			.returning();

		await tx.insert(auditLogs).values({
			id: crypto.randomUUID(),
			actorId: input.actorId,
			action: 'asset.uploaded',
			targetType: 'asset',
			targetId: id,
			metadata: { mimeType, bytes: body.size },
			ipAddress: input.ipAddress,
			userAgent: input.userAgent
		});

		return inserted;
	});

	return { ...asset, url: `/media/${asset.id}` };
}
