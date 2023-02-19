import type { PageLoad } from './$types';

export const load = (async () => {
	const allProjectFiles = import.meta.glob<any>('../../lib/projects/*.md');
	const iterableProjectFiles = Object.entries(allProjectFiles);
	const allProjects = await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			const metadata: any = await resolver();
			const data = metadata.metadata;
			const postPath = path.slice(19, -3);

			return {
				meta: data,
				path: postPath
			};
		})
	);
	const sortedProjects = allProjects.sort((a, b) => {
		return new Date(b.meta.last_edited).getTime() - new Date(a.meta.last_edited).getTime();
	});
	return { projects: sortedProjects };
}) satisfies PageLoad;
