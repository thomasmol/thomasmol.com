<script lang="ts">
	export let blog: any;
	var options: object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<a
	href="/blog/{blog.path}"
	class="flex flex-col justify-between overflow-hidden rounded-lg border
  border-stone-200 bg-white transition duration-100
   hover:shadow-xl dark:border-stone-900 dark:bg-stone-800 shadow-stone-800">
	<div class="bg-stone-100 dark:bg-stone-600">
		<img src={blog.meta.thumbnail} class="mx-auto max-h-64 w-auto " alt="" />
	</div>
	<div class="px-5 pt-5">
		<h3 class="text-xl font-semibold text-stone-800 dark:text-stone-100">
			{blog.meta.title}
		</h3>
    <h4 class="text-sm mt-2 font-semibold text-stone-800 dark:text-stone-100">{new Date(blog.meta.date).toDateString()}</h4>
		<p class="mt-3 text-stone-700 dark:text-stone-200">
			{blog.meta.excerpt}
		</p>
	</div>
	<div class="px-5 pb-5">
		<p class="mt-3 font-semibold text-blue-600 dark:text-blue-500">Lees meer &rightarrow;</p>
	</div>
</a>
