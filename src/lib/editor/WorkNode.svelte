<script lang="ts">
	import { Node, NodeArrayProperty, TextProperty } from 'svedit';
	import type { DocumentPath } from 'svedit';

	let { path }: { path: DocumentPath } = $props();
</script>

<Node {path}>
	<section class="mb-14">
		<TextProperty tag="h2" path={[...path, 'title']} placeholder="Work title" class="mb-3 text-xl/6 font-semibold" />
		<NodeArrayProperty tag="ul" path={[...path, 'items']} class="list-disc space-y-3 pl-5" />
	</section>
</Node>
