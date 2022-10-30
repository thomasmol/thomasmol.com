<script lang="ts">
	export let data: any;
	var options: object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<svelte:head>
	<title>Project | {data.title}</title>
</svelte:head>

<div class="px-4 py-20 lg:px-16">
	<article class="prose mx-auto">
		<a
			href="/projects"
			class="mb-6 block text-left font-semibold text-gray-500 no-underline hover:underline"
			>&#8249; Terug naar alle projecten</a>

		<h1 class="dark:text-stone-100">{data.title}</h1>
		<small class="capitalize">{new Date(data.date).toLocaleDateString('nl-NL', options)}</small>
		<svelte:component this={data.content} />
	</article>
</div>
