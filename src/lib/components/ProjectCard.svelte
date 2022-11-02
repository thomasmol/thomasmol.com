<script lang="ts">
	export let project: any;
</script>

<a
	href="projects/{project.path}"
	class="flex flex-col justify-between overflow-hidden rounded-lg border
  border-stone-200 bg-white transition duration-100
   hover:shadow-xl dark:border-stone-900 dark:bg-stone-800 shadow-stone-800">
	<div class="bg-stone-100 dark:bg-stone-600">
		<img src={project.meta.thumbnail} class="mx-auto max-h-64 w-auto" alt="{project.meta.title}" width="100%" height="100%" />
	</div>
	<div class="px-5 pt-5">
		<h1 class="text-xl font-semibold text-stone-800 dark:text-stone-100">
			{project.meta.title}
		</h1>
		<p class="mt-3 text-stone-700 dark:text-stone-200">
			{project.meta.excerpt}
		</p>
	</div>
	<div class="px-5 pb-5">
		<p class="mt-3 font-semibold text-blue-600 dark:text-blue-500">Lees meer &rightarrow;</p>
	</div>
</a>
