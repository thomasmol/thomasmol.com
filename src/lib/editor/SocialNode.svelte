<script lang="ts">
	import { Node, TextProperty } from 'svedit';
	import type { DocumentPath } from 'svedit';

	let { path }: { path: DocumentPath } = $props();
</script>

<Node {path}>
	<footer class="border-t border-olive-300 pt-6 text-base/7 dark:border-olive-700">
		<TextProperty tag="p" path={[...path, 'content']} placeholder="Social links" />
	</footer>
</Node>
