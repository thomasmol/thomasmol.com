<script lang="ts">
	import { Node, TextProperty } from 'svedit';
	import type { DocumentPath } from 'svedit';

	let { path }: { path: DocumentPath } = $props();
</script>

<Node {path}>
	<section class="mb-14">
		<TextProperty tag="h2" path={[...path, 'title']} placeholder="Section title" class="mb-3 text-xl/6 font-semibold" />
		<TextProperty tag="p" path={[...path, 'body']} placeholder="Section text" />
	</section>
</Node>
