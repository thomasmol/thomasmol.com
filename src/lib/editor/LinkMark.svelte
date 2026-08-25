<script lang="ts">
	import { getContext } from 'svelte';
	import type { DocumentPath, NodeMap, SveditContext } from 'svedit';
	import type { PortfolioSchema } from './schema.js';

	let { path, content }: { path: DocumentPath; content: string } = $props();
	const svedit = getContext<SveditContext<PortfolioSchema>>('svedit');
	let node = $derived(svedit.session.get<NodeMap<PortfolioSchema>['link']>(path));
	const linkClass = 'text-blue-700 underline decoration-1 underline-offset-2 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:text-blue-300';
</script>

{#if svedit.editable}
	<span class={linkClass}>{content}</span>
{:else}
	<a class={linkClass} href={node.href} target={node.target} rel="noopener noreferrer">{content}</a>
{/if}
