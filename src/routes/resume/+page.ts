import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
    // @ts-expect-error - this is a hack to get around the fact that
	const post = await import(`../../lib/resume.md`);
	const content = post.default;
	return {		
		content
	};
};
