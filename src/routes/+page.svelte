<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Thomas Mol | App Maker</title>
	<meta
		name="description"
		content="I build useful apps. Currently working on AI tools and finishing my master's degree." />
	<meta
		name="og:description"
		content="I build useful apps. Currently working on AI tools and finishing my master's degree." />
	<meta name="og:title" content="Thomas Mol | App Maker" />
	<meta name="og:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta name="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@thomas_mol" />
	<meta name="twitter:creator" content="@thomas_mol" />
	<meta name="twitter:title" content="Thomas Mol | App Maker" />
	<meta
		name="twitter:description"
		content="I build useful apps. Currently working on AI tools and finishing my master's degree." />
	<meta name="twitter:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta name="twitter:image:alt" content="Thomas Mol" />
	<meta name="linkedin:site" content="https://www.linkedin.com/in/thomas-mol/" />
	<meta name="linkedin:creator" content="https://www.linkedin.com/in/thomas-mol/" />
	<meta name="linkedin:title" content="Thomas Mol | App Maker" />
	<meta
		name="linkedin:description"
		content="I build useful apps. Currently working on AI tools and finishing my master's degree." />
	<meta name="linkedin:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta name="linkedin:image:alt" content="Thomas Mol" />
</svelte:head>

<main class="">
	<section id="hero" class="relative max-h-screen overflow-hidden bg-stone-900 backdrop-blur-0">
		<img
			src="/images/smartphone.webp"
			alt="A robot holding a smartphone"
			height="100%"
			width="100%"
			class="absolute -z-50 h-full w-full overflow-hidden object-cover blur-lg brightness-[0.5]" />
		<div class="container space-y-4 pt-10 text-center  md:pt-20">
			<img
				src="/images/thomasmol.webp"
				alt="Thomas Mol"
				width="5rem"
				height="5rem"
				class="mx-auto h-auto w-24 bg-stone-200 shadow-xl shadow-stone-800 first:rounded-full" />
			<h1 class="text-3xl font-bold text-stone-100">Thomas Mol</h1>
			<h2 class="text-xl font-bold text-stone-200">App Builder from Utrecht, The Netherlands 📍</h2>
			<p class="text-lg text-stone-300" />
			<div class="inline-flex justify-center gap-6 py-2 md:pb-10">
				<a
					href="https://linkedin.com/in/thomas-mol"
					target="_blank"
					rel="noreferrer"
					class="text-2xl text-stone-300 hover:text-stone-400">
					<Linkedin />
				</a>
				<a
					href="https://github.com/thomasmol"
					target="_blank"
					rel="noreferrer"
					class="text-2xl text-stone-300 hover:text-stone-400">
					<Github />
				</a>
				<a
					href="https://twitter.com/thomas_mol"
					target="_blank"
					rel="noreferrer"
					class="text-2xl text-stone-300 hover:text-stone-400">
					<Twitter />
				</a>
			</div>
			<div>
				<a
					href="#projects"
					class="inline-flex pb-8 text-center text-4xl text-stone-200 hover:text-stone-50"
					><ArrowDown /></a>
			</div>
		</div>
	</section>

	<section id="projects" class="my-12 ">
		<div class="mx-auto max-w-3xl px-2 md:px-4 py-4">
			<header class="space-y-4 py-10 text-center">
				<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">
					👨‍💻 What I am working on
				</h1>
			</header>
			<div class="flex flex-col gap-10">
				{#each data.projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
			<div class="text-center py-10">
				<a
					href="projects"
					class="text-xl text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
					>View more projects &RightArrow;</a>
			</div>
		</div>
	</section>

	<section id="contact" class="my-16 md:my-24">
		<div class="container max-w-2xl ">
			<header class="space-y-2 py-10 text-center">
				<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">
					Want to work together?
				</h1>
			</header>
			<div class="text-center">
				<h2 class="mb-4 text-xl text-stone-800 dark:text-stone-100">
					Send me a message through <a
						href="http://linkedin.com/in/thomas-mol"
						target="_blank"
						class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						rel="noopener noreferrer"
						>LinkedIn <ExternalLink />
					</a>
					or
					<a
						href="http://twitter.com/thomas_mol"
						target="_blank"
						class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						rel="noopener noreferrer"
						>Twitter <ExternalLink />
					</a>!
				</h2>
				<h3 class="py-4 text-xl  text-stone-800 dark:text-stone-100">
					Or plan a meeting at <a
						href="https://cal.com/thomasmol/30min"
						target="_blank"
						class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						rel="noopener noreferrer"
						>Cal.com <ExternalLink />
					</a>
				</h3>
			</div>
		</div>
	</section>
</main>
<Footer />
