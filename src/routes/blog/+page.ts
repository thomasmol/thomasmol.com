import type { PageLoad } from './$types';

export const load = (async () => {
	const allPostFiles = import.meta.glob('../../lib/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(16, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});
	return {posts: sortedPosts};
}) satisfies PageLoad;
