import { defaultDocument } from '#lib/content/default-document.js';
import { and, desc, eq } from 'drizzle-orm';
import { db } from './db/index.js';
import {
	assets,
	auditLogs,
	documentRevisions,
	documents,
	type PortfolioDocument
} from './db/schema.js';

export async function getHomeDocument() {
	await db
		.insert(documents)
		.values({
			id: 'home',
			slug: 'home',
			title: 'Thomas Mol - Founding Engineer',
			data: defaultDocument
		})
		.onConflictDoNothing();

	const [document] = await db.select().from(documents).where(eq(documents.id, 'home')).limit(1);
	return document;
}

export async function saveHomeDocument(input: {
	data: PortfolioDocument;
	revision: number;
	actorId: string;
	ipAddress: string | null;
	userAgent: string | null;
}) {
	return db.transaction(async (tx) => {
		const [current] = await tx
			.select()
			.from(documents)
			.where(eq(documents.id, 'home'))
			.for('update')
			.limit(1);

		if (!current || current.revision !== input.revision) {
			return null;
		}

		await tx.insert(documentRevisions).values({
			id: crypto.randomUUID(),
			documentId: current.id,
			revision: current.revision,
			data: current.data,
			actorId: input.actorId
		});

		const [updated] = await tx
			.update(documents)
			.set({ data: input.data, revision: current.revision + 1, updatedAt: new Date() })
			.where(and(eq(documents.id, current.id), eq(documents.revision, current.revision)))
			.returning();

		await tx.insert(auditLogs).values({
			id: crypto.randomUUID(),
			actorId: input.actorId,
			action: 'document.saved',
			targetType: 'document',
			targetId: current.id,
			metadata: { fromRevision: current.revision, toRevision: current.revision + 1 },
			ipAddress: input.ipAddress,
			userAgent: input.userAgent
		});

		return updated;
	});
}

export async function loadOverview() {
	const document = await getHomeDocument();
	const revisions = await db
		.select()
		.from(documentRevisions)
		.where(eq(documentRevisions.documentId, document.id))
		.orderBy(desc(documentRevisions.createdAt))
		.limit(20);
	const logs = await db.select().from(auditLogs).orderBy(desc(auditLogs.createdAt)).limit(20);
	const media = await db.select().from(assets).orderBy(desc(assets.createdAt)).limit(50);
	return { document, revisions, logs, media };
}
