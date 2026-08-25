import { defineRelationsPart } from 'drizzle-orm';
import {
	bigint,
	boolean,
	index,
	integer,
	jsonb,
	pgTable,
	text,
	timestamp,
	uniqueIndex
} from 'drizzle-orm/pg-core';
import { z } from 'zod';

export const user = pgTable(
	'user',
	{
		id: text('id').primaryKey(),
		name: text('name').notNull(),
		email: text('email').notNull().unique(),
		emailVerified: boolean('email_verified').default(false).notNull(),
		image: text('image'),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()).notNull(),
		role: text('role'),
		banned: boolean('banned').default(false),
		banReason: text('ban_reason'),
		banExpires: timestamp('ban_expires'),
		twoFactorEnabled: boolean('two_factor_enabled').default(false)
	}
);

export const session = pgTable(
	'session',
	{
		id: text('id').primaryKey(),
		expiresAt: timestamp('expires_at').notNull(),
		token: text('token').notNull().unique(),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at').$onUpdate(() => new Date()).notNull(),
		ipAddress: text('ip_address'),
		userAgent: text('user_agent'),
		userId: text('user_id')
			.notNull()
			.references(() => user.id, { onDelete: 'cascade' }),
		impersonatedBy: text('impersonated_by')
	},
	(table) => [index('session_userId_idx').on(table.userId)]
);

export const account = pgTable(
	'account',
	{
		id: text('id').primaryKey(),
		issuer: text('issuer').notNull(),
		accountId: text('account_id').notNull(),
		providerId: text('provider_id').notNull(),
		userId: text('user_id')
			.notNull()
			.references(() => user.id, { onDelete: 'cascade' }),
		accessToken: text('access_token'),
		refreshToken: text('refresh_token'),
		idToken: text('id_token'),
		accessTokenExpiresAt: timestamp('access_token_expires_at'),
		refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
		scope: text('scope'),
		password: text('password'),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at').$onUpdate(() => new Date()).notNull()
	},
	(table) => [
		uniqueIndex('account_issuer_accountId_uidx').on(table.issuer, table.accountId),
		index('account_userId_idx').on(table.userId)
	]
);

export const verification = pgTable(
	'verification',
	{
		id: text('id').primaryKey(),
		identifier: text('identifier').notNull(),
		value: text('value').notNull(),
		expiresAt: timestamp('expires_at').notNull(),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()).notNull()
	},
	(table) => [index('verification_identifier_idx').on(table.identifier)]
);

export const twoFactor = pgTable(
	'two_factor',
	{
		id: text('id').primaryKey(),
		secret: text('secret').notNull(),
		backupCodes: text('backup_codes').notNull(),
		userId: text('user_id')
			.notNull()
			.references(() => user.id, { onDelete: 'cascade' }),
		verified: boolean('verified').default(true),
		failedVerificationCount: integer('failed_verification_count').default(0),
		lockedUntil: timestamp('locked_until')
	},
	(table) => [index('twoFactor_secret_idx').on(table.secret), index('twoFactor_userId_idx').on(table.userId)]
);

export const relations = defineRelationsPart(
	{ user, session, account, verification, twoFactor },
	(r) => ({
		user: {
			sessions: r.many.session({ from: r.user.id, to: r.session.userId }),
			accounts: r.many.account({ from: r.user.id, to: r.account.userId }),
			twoFactors: r.many.twoFactor({ from: r.user.id, to: r.twoFactor.userId })
		},
		session: {
			user: r.one.user({ from: r.session.userId, to: r.user.id })
		},
		account: {
			user: r.one.user({ from: r.account.userId, to: r.user.id })
		},
		twoFactor: {
			user: r.one.user({ from: r.twoFactor.userId, to: r.user.id })
		}
	})
);

const rangeSchema = z.object({ start_offset: z.number(), end_offset: z.number(), node_id: z.string() });
const textValueSchema = z.object({
	content: z.string(),
	marks: z.array(rangeSchema),
	annotations: z.array(rangeSchema)
});
const nodeArrayValueSchema = z.object({
	nodes: z.array(z.string()),
	marks: z.array(rangeSchema),
	annotations: z.array(rangeSchema)
});
const nodePropertySchema = z.union([z.boolean(), z.number(), z.string(), textValueSchema, nodeArrayValueSchema]);

export const portfolioDocumentSchema = z.object({
	document_id: z.string(),
	nodes: z.record(z.string(), z.object({ id: z.string(), type: z.string() }).catchall(nodePropertySchema))
});

export type PortfolioDocument = z.infer<typeof portfolioDocumentSchema>;

export const documents = pgTable(
	'document',
	{
		id: text('id').primaryKey(),
		slug: text('slug').notNull(),
		title: text('title').notNull(),
		data: jsonb('data').$type<PortfolioDocument>().notNull(),
		published: boolean('published').default(true).notNull(),
		revision: integer('revision').default(1).notNull(),
		createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
	},
	(table) => [uniqueIndex('document_slug_idx').on(table.slug)]
);

export const documentRevisions = pgTable(
	'document_revision',
	{
		id: text('id').primaryKey(),
		documentId: text('document_id')
			.notNull()
			.references(() => documents.id, { onDelete: 'cascade' }),
		revision: integer('revision').notNull(),
		data: jsonb('data').$type<PortfolioDocument>().notNull(),
		actorId: text('actor_id').references(() => user.id, { onDelete: 'set null' }),
		createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
	},
	(table) => [uniqueIndex('document_revision_idx').on(table.documentId, table.revision)]
);

export const assets = pgTable(
	'asset',
	{
		id: text('id').primaryKey(),
		objectKey: text('object_key').notNull(),
		originalName: text('original_name').notNull(),
		mimeType: text('mime_type').notNull(),
		bytes: bigint('bytes', { mode: 'number' }).notNull(),
		width: integer('width'),
		height: integer('height'),
		createdBy: text('created_by').references(() => user.id, { onDelete: 'set null' }),
		createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
	},
	(table) => [uniqueIndex('asset_object_key_idx').on(table.objectKey)]
);

export const auditLogs = pgTable(
	'audit_log',
	{
		id: text('id').primaryKey(),
		actorId: text('actor_id').references(() => user.id, { onDelete: 'set null' }),
		action: text('action').notNull(),
		targetType: text('target_type').notNull(),
		targetId: text('target_id').notNull(),
		metadata: jsonb('metadata').$type<Record<string, boolean | number | string | null>>(),
		ipAddress: text('ip_address'),
		userAgent: text('user_agent'),
		createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
	},
	(table) => [index('audit_log_target_idx').on(table.targetType, table.targetId), index('audit_log_created_at_idx').on(table.createdAt)]
);
