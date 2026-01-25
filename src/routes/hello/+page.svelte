<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Hello | Thomas Mol</title>
	<meta name="description" content="A simple hello page" />
	<meta property="og:title" content="Hello | Thomas Mol" />
	<meta property="og:description" content="A simple hello page" />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="flex-grow">
	<section class="bg-stone-100 py-16 dark:bg-stone-800">
		<div class="container text-center">
			<h1 class="mb-8 text-4xl font-bold text-stone-800 dark:text-stone-100">Hello!</h1>
			<p class="mb-6 text-xl text-stone-700 dark:text-stone-200">
				Welcome to this simple hello page.
			</p>
			<p class="text-lg text-stone-600 dark:text-stone-300">
				This is a new page added to the portfolio website.
			</p>
			<div class="mt-8">
				<a
					href="/"
					class="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
					Back to Home
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />
