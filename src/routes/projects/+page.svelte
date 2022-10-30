<script lang="ts">
	export let data;
	const posts: any = Object.values(data);
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

<div class="container mx-auto px-4 pt-20 lg:px-16">
	<a href="/" class="mt-6 block text-left font-semibold text-stone-500 no-underline hover:underline"
		>&#8249; Terug naar home</a>
	<h1 class="py-10 text-2xl font-semibold text-gray-900">Al mijn projecten</h1>
	<div class="mb-20 grid gap-10 md:grid-cols-3">
		{#each posts as post}
			<a
				href="/projects/{post.path}"
				class="flex basis-1/3 flex-col justify-between rounded-lg border bg-stone-50 hover:bg-stone-100 hover:shadow-sm">
				<img
					src={post.meta.thumbnail}
					alt="Project thumbnail"
					class="h-40 w-full overflow-hidden rounded-t-lg object-cover" />
				<h2 class="px-4 pt-4 text-xl font-semibold text-gray-800">
					{post.meta.title}
				</h2>
				<div class="px-4 pb-4">
					<h3 class="text-semibold py-3 text-sm capitalize text-stone-500">
						{new Date(post.meta.date).toLocaleDateString('nl-NL', options)}
					</h3>
					<p class="line-clamp-2 text-gray-600">
						{post.meta.excerpt}
					</p>
					<p class="mt-4 font-bold text-stone-500">Lees meer</p>
				</div>
			</a>
		{/each}
	</div>
</div>
