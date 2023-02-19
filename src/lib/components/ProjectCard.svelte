<script lang="ts">
	import Clock from "$lib/icons/Clock.svelte";

	/* 	import { format, register } from 'timeago.js';
	import nl from 'timeago.js/lib/lang/nl';
	register('nl', nl); */
	export let project: any;
	var options: object = { year: 'numeric', month: 'short', day: 'numeric' };
</script>

<a
	href="projects/{project.path}"
	class="flex flex-col justify-between overflow-hidden rounded-lg border
  border-stone-200 bg-white shadow-stone-800 transition
   duration-100 hover:shadow-xl dark:border-stone-900 dark:bg-stone-800">
	<div>
		<div class="bg-stone-100 dark:bg-stone-600">
			<img
				src={project.meta.thumbnail}
				class="mx-auto max-h-36 w-auto"
				alt={project.meta.title}
				width="100%"
				height="100%" />
		</div>
		<div class="px-5 pt-5">
			<h1 class="text-xl font-semibold text-stone-800 dark:text-stone-100">
				{project.meta.title}
			</h1>
			<div class="mt-2">
				{#each project.meta.tags as tag}
					<span
						class="mr-2 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100">
						{tag}
					</span>
				{/each}
			</div>
			<p class="mt-3 text-stone-700 dark:text-stone-200">
				{project.meta.excerpt}
			</p>
		</div>
	</div>
	<div class="px-5 pb-5 mt-4 flex justify-between">
		<p class="text-sm text-stone-400 dark:text-stone-400 inline-flex gap-2 items-center"><Clock/> {new Date(project.meta.last_edited).toLocaleDateString('nl-NL', options)}</p>
		<p class="font-semibold text-blue-600 dark:text-blue-500">Lees meer &rightarrow;</p>
	</div>
</a>
