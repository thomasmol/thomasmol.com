import type { PageLoad } from './$types';

export const load = (async ({params}) => {
	const post = await import(`../../../lib/posts/${params.slug}.md`);
	const {
		layout,
		title,
		date,
		thumbnail,
		body,
		last_edited,
		excerpt,
		wordcount,
		readtime,
		author,
		tags
	} = post.metadata;
	const content = post.default;

	return {
		layout,
		title,
		thumbnail,
		date,
		last_edited,
		excerpt,
		wordcount,
		readtime,
		author,
		tags,
		body,
		content
	};
}) satisfies PageLoad;
