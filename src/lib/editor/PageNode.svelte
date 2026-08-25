<script lang="ts">
	import { Node, NodeArrayProperty } from 'svedit';
	import type { DocumentPath } from 'svedit';

	let { path }: { path: DocumentPath } = $props();
</script>

<Node {path}>
	<main class="isolate min-h-dvh bg-olive-50 font-serif text-lg/7 text-olive-900 antialiased dark:bg-olive-950 dark:text-olive-100">
		<NodeArrayProperty path={[...path, 'body']} class="mx-auto max-w-2xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 lg:pt-32" />
	</main>
</Node>
