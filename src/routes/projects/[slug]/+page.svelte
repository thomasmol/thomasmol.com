<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Home from '$lib/icons/Home.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';

	export let data: any;
	var options: object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<svelte:head>
	<title>Project | {data.title}</title>
</svelte:head>
<nav class="fixed top-0 z-50 w-full bg-stone-50/90 backdrop-blur-xl dark:bg-stone-900/90">
	<div class="container flex justify-between py-4">
		<a
			href="/"
			class="flex h-5 w-5 gap-3 font-semibold text-stone-500 hover:text-stone-800 dark:text-stone-200"
			><Home /></a>
		<div class="flex space-x-8 capitalize ">
			<a
				href="https://linkedin.com/in/thomas-mol"
				target="_blank"
				rel="noreferrer"
				class=" inline-flex h-8 w-8 gap-2 p-1 font-semibold text-stone-500 hover:text-stone-700">
				<Linkedin />
			</a>
			<a
				href="https://github.com/thomasmol"
				target="_blank"
				rel="noreferrer"
				class="inline-flex h-8 w-8 gap-2 p-1 font-semibold text-stone-500 hover:text-stone-700">
				<Github />
			</a>
			<a
				href="https://twitter.com/thomas_a_mol"
				target="_blank"
				rel="noreferrer"
				class="inling-flex h-8 w-8 gap-2 p-1 font-semibold text-stone-500 hover:text-stone-700">
				<Twitter />
			</a>
		</div>
	</div>
</nav>
<main>
	<article class="prose prose-stone dark:prose-invert mx-auto">
		<header class="space-y-4 pt-20 pb-4 text-center">
			<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">{data.title}</h1>
		</header>
		<small class="capitalize">{new Date(data.date).toLocaleDateString('nl-NL', options)}</small>
		<svelte:component this={data.content} />

		<p class="my-8">
				<a
					href="/projects"
					class=" text-blue-600 no-underline hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
					>&leftarrow; Naar alle projecten</a>
			</p>
	</article>
</main>

<Footer />
