<script lang="ts">
	import Clock from '$lib/icons/Clock.svelte';

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
	<div class="flex flex-wrap">
		<div class="h-40 w-40 bg-stone-100 dark:bg-stone-600">
			<img
				src={project.meta.logo}
				class=" h-full w-full object-contain"
				alt={project.meta.title}
				width="100%"
				height="100%" />
		</div>
		<div class="flex md:flex-1 flex-col justify-between px-5 py-3">
			<div>
				<h1 class="text-xl font-semibold text-stone-800 dark:text-stone-100">
					{project.meta.title}
				</h1>
				
				<p class="mt-1 text-stone-700 dark:text-stone-200">
					{project.meta.excerpt}
				</p>
			</div>
			<div class="mt-4 flex justify-between ">
				<p class="inline-flex items-center gap-2 text-sm text-stone-400 dark:text-stone-400">
					<Clock />
					{new Date(project.meta.last_edited).toLocaleDateString('en-GB', options)}
				</p>
				<p class="font-semibold text-blue-600 dark:text-blue-500">Read more &rightarrow;</p>
			</div>
		</div>
	</div>
</a>
