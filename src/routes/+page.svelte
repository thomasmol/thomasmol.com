<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>ThomasMol.com</title>
</svelte:head>

<main class="">
	<section id="hero" class="max-h-screen overflow-hidden bg-stone-900 backdrop-blur-0">
		<img
			src="/images/dalle-laptop.webp"
			alt=""
			height="100%"
			width="100%"
			class="absolute -z-50 blur-lg brightness-[0.4]" />
		<div class="container space-y-4 pt-10 text-center  md:pt-20">
			<img
				src="/images/about.webp"
				alt="Thomas Mol"
				width="4rem"
				height="4rem"
				class="h-auto mx-auto w-24 bg-stone-200 shadow-xl shadow-stone-800 first:rounded-full" />
			<h1 class="text-3xl font-bold text-stone-100">Thomas Mol</h1>
			<h2 class="text-xl font-bold text-stone-200">Web & App Developer uit Utrecht 📍</h2>
			<p class="text-lg text-stone-300">
				Bezig met het creëren van een gezondere werkvloer met <a
					href="https://bizzfit.app"
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center gap-1 font-semibold text-amber-500 hover:text-amber-600"
					>bizzfit <ExternalLink /></a
				>,<br /> werkzaam als freelance web/app ontwikkelaar,<br /> en de master Business Informatics
				aan de UU aan het afronden.
			</p>
			<div class="inline-flex justify-center gap-6 py-2 md:pb-10">
				<a
					href="https://linkedin.com/in/thomas-mol"
					target="_blank"
					rel="noreferrer"
					class="text-2xl text-stone-300 hover:text-stone-400">
					<Linkedin />
				</a>
				<a
					href="https://github.com/thomasmol"
					target="_blank"
					rel="noreferrer"
					class="text-2xl text-stone-300 hover:text-stone-400">
					<Github />
				</a>
				<a
					href="https://twitter.com/thomas_mol"
					target="_blank"
					rel="noreferrer"
					class="text-2xl text-stone-300 hover:text-stone-400">
					<Twitter />
				</a>
			</div>
			<div class="flex gap-6 justify-center">
				<a href="#services" class="rounded bg-white py-1 px-4">Services</a>
				<a href="#portfolio" class="rounded bg-white py-1 px-4">Projecten</a>
			</div>
			<a href="#services" class="inline-flex text-center pb-8 text-4xl text-stone-200 hover:text-stone-50"
				><ArrowDown /></a>
		</div>
	</section>

	<section id="services" class="my-12 md:my-24">
		<div class="container">
			<header class="space-y-2 py-20 text-center">
				<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">
					Wat ik voor jou kan doen
				</h1>
			</header>

			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-32">
				<div>
					<div class="overflow-hidden">
						<img
							src="/images/dalle-laptop.webp"
							alt="laptop"
							class="h-56 w-full rounded-2xl object-cover object-bottom" />
					</div>
					<h2 class="mt-6 text-xl font-semibold text-stone-800 dark:text-stone-100">💻 Websites</h2>
					<p class="mt-2 text-lg text-stone-700  dark:text-stone-300">
						Ik maak websites op maat, met CMS zodat jij makkelijk nieuwe content kan uploaden en
						aanpassen. Ik kan je helpen met het ontwerp, de hosting en het onderhoud.
					</p>
				</div>
				<div>
					<div class="overflow-hidden">
						<img
							src="/images/dalle-smartphone.webp"
							alt="laptop"
							class="h-56 w-full rounded-2xl object-cover object-center" />
					</div>
					<h2 class="mt-6 text-xl font-semibold text-stone-800 dark:text-stone-100">📱 Apps</h2>
					<p class="mt-4 text-lg text-stone-700  dark:text-stone-300">
						Webapp of smartphone app nodig? Ik maak ze voor je, met een mooie interface en een goede
						gebruikerservaring.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="portfolio" class="my-16 md:my-32">
		<div class="container">
			<header class="space-y-4 py-20 text-center">
				<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">
					Waar ben ik mee bezig
				</h1>
				<p>
					<a
						href="projects"
						class="mt-3 text-xl text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>Alle projecten &RightArrow;</a>
				</p>
			</header>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each data.projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</div>
	</section>

	<section id="contact" class="my-16 md:my-32">
		<div class="container">
			<header class="space-y-2 py-10 text-center">
				<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">
					Samenwerken?
				</h1>
			</header>
			<div class="text-center">
				<h2 class="mb-4 text-xl text-stone-800 dark:text-stone-100">
					Stuur me een berichtje via <a
						href="http://linkedin.com/in/thomas-mol"
						target="_blank"
						class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						rel="noopener noreferrer"
						>LinkedIn <ExternalLink />
					</a>
					of
					<a
						href="http://twitter.com/thomas_mol"
						target="_blank"
						class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						rel="noopener noreferrer"
						>Twitter <ExternalLink />
					</a>!
				</h2>
				<h3 class="py-4 text-xl  text-stone-800 dark:text-stone-100">
					Of plan gelijk een meeting via <a
						href="https://cal.com/thomasmol/30min"
						target="_blank"
						class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						rel="noopener noreferrer"
						>Cal.com <ExternalLink />
					</a>
				</h3>
			</div>
		</div>
	</section>
</main>
<Footer />
