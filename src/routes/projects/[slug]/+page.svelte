<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import Clock from '$lib/icons/Clock.svelte';

	export let data: any;
	var options: object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	
</script>

<svelte:head>
	<title>Thomas Mol | {data.title}</title>
	<meta
		name="description"
		content="{data.excerpt}" />
	<meta
		name="og:description"
		content="{data.excerpt}" />
	<meta name="og:title" content="Thomas Mol | {data.title}" />
	<meta name="og:image" content="https://thomasmol.com{data.thumbnail}" />
	<meta name="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@thomas_mol" />
	<meta name="twitter:creator" content="@thomas_mol" />
	<meta name="twitter:title" content="Thomas Mol | {data.title}" />
	<meta
		name="twitter:description"
		content="{data.excerpt}" />
	<meta name="twitter:image" content="https://thomasmol.com{data.thumbnail}" />
	<meta name="twitter:image:alt" content="Thomas Mol" />
	<meta name="linkedin:site" content="https://www.linkedin.com/in/thomas-mol/" />
	<meta name="linkedin:creator" content="https://www.linkedin.com/in/thomas-mol/" />
	<meta name="linkedin:title" content="Thomas Mol | {data.title}" />
	<meta
		name="linkedin:description"
		content="{data.excerpt}" />
	<meta name="linkedin:image" content="https://thomasmol.com{data.thumbnail}" />
	<meta name="linkedin:image:alt" content="Thomas Mol" />
</svelte:head>
<NavigationBar/>
<main>
	<article class="prose prose-stone mx-auto dark:prose-invert px-6 mb-10">
		<header class="space-y-4 mt-28 sm:mt-20 text-center">
			<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">{data.title}</h1>
		</header>
		<div class="not-prose">
			<div class="">
				{#each data.tags as tag}
					<p
						class="mr-2 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100">
						{tag}
					</p>
				{/each}
			</div>
			<p class="mt-4 inline-flex items-center gap-2 text-sm text-stone-400 dark:text-stone-500">
				<Clock />
				<span class="font-semibold"
					>{new Date(data.date).toLocaleDateString('nl-NL', options)}</span>
			</p>
			<p class="items-center gap-2 text-sm italic text-stone-400 dark:text-stone-500">
				Update: <span class="font-semibold"
					>{new Date(data.last_edited).toLocaleDateString('nl-NL', options)}</span>
			</p>
		</div>
		<svelte:component this={data.content} />
	</article>
</main>

<Footer />
