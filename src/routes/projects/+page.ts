import type { PageLoad } from './$types';

export const load = (async () => {
	const allPostFiles = import.meta.glob('../../lib/projects/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	const allProjects = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(19, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	const sortedProjects = allProjects.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});
	return {projects: sortedProjects};
}) satisfies PageLoad;
