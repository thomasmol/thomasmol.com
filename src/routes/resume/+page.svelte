<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import Clock from '$lib/icons/Clock.svelte';

	export let data: any;
	var options: object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<svelte:head>
	<title>Thomas Mol | Resume</title>
	<meta name="description" content="Resume of Thomas Mol" />
	<meta property="og:description" content="Resume of Thomas Mol" />
	<meta property="og:title" content="Thomas Mol | Resume" />
	<meta property="og:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@thomas_mol" />
	<meta name="twitter:creator" content="@thomas_mol" />
	<meta name="twitter:title" content="Thomas Mol | Resume" />
	<meta name="twitter:description" content="Resume of Thomas Mol" />
	<meta name="twitter:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta name="twitter:image:alt" content="Thomas Mol" />
	<meta name="linkedin:site" content="https://www.linkedin.com/in/thomas-mol/" />
	<meta name="linkedin:creator" content="https://www.linkedin.com/in/thomas-mol/" />
	<meta name="linkedin:title" content="Thomas Mol | Resume" />
	<meta name="linkedin:description" content="Resume of Thomas Mol" />
	<meta name="linkedin:image" content="https://thomasmol.com/images/thomasmol.webp" />
	<meta name="linkedin:image:alt" content="Thomas Mol" />
</svelte:head>
<NavigationBar />
<main>
	<article class="prose prose-stone mx-auto mb-10 px-6 dark:prose-invert mt-24 prose-img:w-24 prose-img:rounded-3xl">
		<svelte:component this={data.content} />
	</article>
</main>

<Footer />