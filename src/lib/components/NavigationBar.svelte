<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import Home from '$lib/icons/Home.svelte';
	import Laptop from '$lib/icons/Laptop.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
</script>

<nav class="fixed top-0 z-50 w-full bg-stone-50/90 backdrop-blur-xl dark:bg-stone-900/90">
	<div class="container flex flex-wrap justify-between gap-4 py-4">
		<div class="space-x-2 sm:space-x-6">
			<a
				href="/"
				class="inline-flex items-center gap-3 font-semibold text-stone-500 hover:text-stone-800 dark:text-stone-200 dark:hover:text-stone-400"
				><Home /> Home
			</a>
			<a
				href="../projects"
				class="inline-flex items-center gap-3 font-semibold text-stone-500 hover:text-stone-800 dark:text-stone-200 dark:hover:text-stone-400"
				><Laptop /> All projects
			</a>
		</div>

		<div class="flex gap-2 text-xl sm:gap-4">
			<a
				href="https://linkedin.com/in/thomas-mol"
				target="_blank"
				rel="noreferrer"
				class=" inline-flex items-center text-stone-500 hover:text-stone-700">
				<Linkedin />
			</a>
			<a
				href="https://github.com/thomasmol"
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center text-stone-500 hover:text-stone-700">
				<Github />
			</a>
			<a
				href="https://twitter.com/thomas_mol"
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center text-stone-500 hover:text-stone-700">
				<Twitter />
			</a>
		</div>
	</div>
</nav>
