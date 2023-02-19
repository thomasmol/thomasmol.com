<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Home from '$lib/icons/Home.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

		var options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
</script>

<svelte:head>
	<title>Projecten</title>
</svelte:head>
<NavigationBar/>
<main>
	<div class="container mx-auto pt-20 pb-20">
		<header class="space-y-4 py-12 text-center">
			<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">Al mijn projecten</h1>

		</header>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.projects as project}
			<ProjectCard {project} />
			{/each}
		</div>
	</div>
</main>
<Footer />
