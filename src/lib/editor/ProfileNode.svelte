<script lang="ts">
	import { getContext } from 'svelte';
	import { Node, TextProperty } from 'svedit';
	import type { DocumentPath, NodeMap, SveditContext } from 'svedit';
	import type { PortfolioSchema } from './schema.js';

	let { path }: { path: DocumentPath } = $props();
	const svedit = getContext<SveditContext<PortfolioSchema>>('svedit');
	let node = $derived(svedit.session.get<NodeMap<PortfolioSchema>['profile']>(path));
</script>

<Node {path}>
	<header class="mb-14">
		<div class="mb-4 flex flex-col items-start gap-3">
			<img class="size-20 shrink-0 rounded-full object-cover outline-1 outline-offset-2 outline-olive-300 sm:size-24 dark:outline-olive-700" src={node.image} alt="" width="400" height="400" />
			<TextProperty tag="h1" path={[...path, 'name']} placeholder="Name" class="text-2xl/7 font-semibold tracking-tight" />
		</div>
		<TextProperty tag="p" path={[...path, 'intro']} placeholder="Introduction" />
	</header>
</Node>
