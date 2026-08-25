import { DATABASE_URL } from '$app/env/private';
import { SQL } from 'bun';
import { drizzle } from 'drizzle-orm/bun-sql';
import * as schema from './schema.js';

const client = new SQL({ url: DATABASE_URL, max: 10, idleTimeout: 30 });

export { schema };
export const db = drizzle({ client, relations: schema.relations });
