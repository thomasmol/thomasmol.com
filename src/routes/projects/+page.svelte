<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

</script>

<svelte:head>
	<title>Thomas Mol | All Projects</title>
	<meta
		name="description"
		content="View a list of my all my projects." />
	<meta
		name="og:description"
		content="View a list of my all my projects." />
	<meta name="og:title" content="Thomas Mol | All Projects" />
	<meta name="og:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta name="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@thomas_mol" />
	<meta name="twitter:creator" content="@thomas_mol" />
	<meta name="twitter:title" content="Thomas Mol | All Projects" />
	<meta
		name="twitter:description"
		content="View a list of my all my projects." />
	<meta name="twitter:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta name="twitter:image:alt" content="Thomas Mol" />
	<meta name="linkedin:site" content="https://www.linkedin.com/in/thomas-mol/" />
	<meta name="linkedin:creator" content="https://www.linkedin.com/in/thomas-mol/" />
	<meta name="linkedin:title" content="Thomas Mol | All Projects" />
	<meta
		name="linkedin:description"
		content="View a list of my all my projects." />
	<meta name="linkedin:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta name="linkedin:image:alt" content="Thomas Mol" />
</svelte:head>
<NavigationBar/>
<main>
	<div class="container mx-auto pt-20 pb-20">
		<header class="space-y-4 py-12 text-center">
			<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">All my projects</h1>

		</header>
		<div class="grid grid-cols-1 gap-10">
			{#each data.projects as project}
			<ProjectCard {project} />
			{/each}
		</div>
	</div>
</main>
<Footer />
