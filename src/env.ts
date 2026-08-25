import { defineEnvVars } from '@sveltejs/kit/env';
import { z } from 'zod';

export const variables = defineEnvVars({
	DATABASE_URL: { schema: z.url().refine((value) => value.startsWith('postgres://') || value.startsWith('postgresql://')) },
	BETTER_AUTH_SECRET: { schema: z.string().min(32) },
	BETTER_AUTH_URL: { schema: z.url() },
	S3_BUCKET: { schema: z.string().min(1) },
	S3_ACCESS_KEY_ID: { schema: z.string().min(1) },
	S3_SECRET_ACCESS_KEY: { schema: z.string().min(1) },
	S3_ENDPOINT: { schema: z.url() },
	S3_REGION: { schema: z.string().min(1) }
});
