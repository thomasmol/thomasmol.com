<script lang="ts">
	let currentYear = new Date().getFullYear();
</script>

<footer class="bg-stone-100 dark:bg-stone-800">
	<div class="container space-y-4 py-6">
		<div class="flex flex-col gap-1 text-left text-stone-700 dark:text-stone-300">
			<small><strong>KVK (CoC)</strong> 80831486</small>
			<small><strong>IBAN</strong> NL80 BUNQ 2088 5743 01</small>
		</div>
		<!-- <div class="flex flex-col gap-1 text-left text-stone-700 dark:text-stone-300">
			<small><a href="/en">English version</a></small>
			<small><a href="/">Nederlandse versie</a></small>
		</div> -->
		<p class="text-left text-sm font-semibold capitalize text-stone-700 dark:text-stone-400">
			&copy; {currentYear} Thomas Mol 🇳🇱
		</p>
	</div>
</footer>
