export async function GET() {
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

	const projectUrls = allProjects
		.map((project: any) => {
			return `
<url>
  <loc>https://thomasmol.com/projects/${project.path}</loc>
  <lastmod>${project.meta.last_edited}</lastmod>
  <priority>0.80</priority>
</url>
`;
		})
		.join('');
	return new Response(
		`
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
          xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="https://www.w3.org/1999/xhtml"
          xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
          xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
          xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
      <url>
        <loc>https://thomasmol.com/</loc>
        <lastmod>2023-07-07T07:31:19+00:00</lastmod>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>https://thomasmol.com/projects</loc>
        <lastmod>2023-07-07T07:31:19+00:00</lastmod>
        <priority>0.90</priority>
    </url>
      ${projectUrls}
      </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
