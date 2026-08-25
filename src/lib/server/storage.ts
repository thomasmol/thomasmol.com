import {
	S3_ACCESS_KEY_ID,
	S3_BUCKET,
	S3_ENDPOINT,
	S3_REGION,
	S3_SECRET_ACCESS_KEY
} from '$app/env/private';
import { S3Client } from 'bun';

export function getStorage() {
	return new S3Client({
		bucket: S3_BUCKET,
		accessKeyId: S3_ACCESS_KEY_ID,
		secretAccessKey: S3_SECRET_ACCESS_KEY,
		endpoint: S3_ENDPOINT,
		region: S3_REGION
	});
}
