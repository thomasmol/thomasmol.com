<script lang="ts">
	import { Node, TextProperty } from 'svedit';
	import type { DocumentPath } from 'svedit';

	let { path }: { path: DocumentPath } = $props();
</script>

<Node {path} tag="li">
	<TextProperty tag="span" path={[...path, 'content']} placeholder="Work item" />
</Node>
