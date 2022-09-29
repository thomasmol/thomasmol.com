<script lang="ts">
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Home from '$lib/icons/Home.svelte';
	import Laptop from '$lib/icons/Laptop.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Moon from '$lib/icons/Moon.svelte';
	import Phone from '$lib/icons/Phone.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import { onMount } from 'svelte';

	let y: number;
	let currentYear = new Date().getFullYear();
	let hero: number;
	let services: number;
	let portfolio: number;
	let contact: number;
	onMount(() => {
		hero = document.getElementById('hero')!.offsetTop;
		services = document.getElementById('services')!.offsetTop;
		portfolio = document.getElementById('portfolio')!.offsetTop;
		contact = document.getElementById('contact')!.offsetTop;
	});
</script>

<svelte:head>
	<title>ThomasMol.com</title>
</svelte:head>
<svelte:window bind:scrollY={y} />
<nav class="fixed top-0 z-50 w-full bg-stone-50/90 backdrop-blur-xl dark:bg-stone-900/90">
	<div class="container flex justify-around py-4">
		<a
			href="/"
			class:text-stone-900={y < services}
			class="flex h-5 w-5 gap-3 font-semibold text-stone-500 hover:text-stone-800 dark:text-stone-200"
			><Home /></a>
		<div class="flex space-x-8 capitalize ">
			<a
				href="#services"
				class:text-stone-900={y >= services && y < portfolio}
				class="font-semibold text-stone-500 hover:text-stone-800 dark:text-stone-200">services</a>
			<a
				href="#portfolio"
				class:text-stone-900={y >= portfolio && y < contact}
				class="font-semibold text-stone-500 hover:text-stone-800 dark:text-stone-200">portfolio</a>
			<a
				href="#contact"
				class:text-stone-900={y >= contact}
				class="font-semibold text-stone-500 hover:text-stone-800 dark:text-stone-200">contact</a>
		</div>
		<a href="/" class="h-5 w-5 text-stone-600 dark:text-stone-200"><Moon /></a>
	</div>
</nav>

<main class="">
	<section id="hero" class="mt-14 max-h-screen overflow-hidden bg-stone-900 backdrop-blur-0">
		<img
			src="/images/dalle-laptop-large.png"
			alt=""
			class="absolute -z-50   blur-lg brightness-[0.4]" />
		<div class="container space-y-4 pt-10 text-center md:pt-32">
			<img
				src="/images/about.png"
				alt="Thomas Mol"
				width="auto"
				height="auto"
				class="mx-auto h-auto w-32 bg-stone-200 shadow-xl shadow-stone-800 first:rounded-full md:mb-10" />
			<h1 class="mb-2 text-4xl font-bold text-stone-100">Thomas Mol</h1>
			<h2 class="text-2xl font-bold text-stone-200">Web en app developer uit Utrecht</h2>
			<p class="mx-auto max-w-xl text-xl text-stone-300">
				Bezig met het creëren van een gezondere werkvloer met <a
					href="https://bizzfit.app"
					target="_blank"
					class="font-semibold text-amber-500 hover:text-amber-600">bizzfit</a
				>,<br /> werkzaam als freelance web/app ontwikkelaar,<br /> en de master Business Informatics
				aan de UU aan het afronden.
			</p>
			<div class="inline-flex justify-center gap-4 py-2 md:py-10">
				<a
					href="https://linkedin.com/in/thomas-mol"
					target="_blank"
					class=" inline-flex h-8 w-8 gap-2 p-1 font-semibold text-stone-300 hover:text-stone-400">
					<Linkedin />
				</a>
				<a
					href="https://github.com/thomasmol"
					target="_blank"
					class="inline-flex h-8 w-8 gap-2 p-1 font-semibold text-stone-300 hover:text-stone-400">
					<Github />
				</a>
				<a
					href="https://twitter.com/thomas_a_mol"
					target="_blank"
					class="inling-flex h-8 w-8 gap-2 p-1 font-semibold text-stone-300 hover:text-stone-400">
					<Twitter />
				</a>
			</div>
		</div>
		<div class="mt-5 mb-10 h-10 md:mt-10">
			<a href="#services" class="h-10 w-5 text-stone-200 hover:text-stone-50"><ArrowDown /></a>
		</div>
	</section>

	<section id="services" class="md:my-24">
		<div class="container">
			<header class="space-y-2 py-20 text-center">
				<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">
					Wat ik voor jou kan doen
				</h1>
			</header>

			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:gap-40">
				<div class="space-y-2">
					<div class="mb-6 flex gap-4">
						<div class="inline-block h-8 rounded bg-[#ca9a7d] p-1.5 text-stone-100">
							<Laptop />
						</div>
						<h3 class="self-end text-xl font-semibold text-stone-800 dark:text-stone-100">
							Websites
						</h3>
					</div>
					<p class="text-lg text-stone-700 dark:text-stone-200">
						Ik maak websites op maat, met CMS zodat jij makkelijk nieuwe content kan uploaden en
						aanpassen. Ik kan je helpen met het ontwerp, de hosting en het onderhoud.
					</p>
				</div>
				<div class="order-first md:order-none">
					<img
						src="/images/dalle-laptop.png"
						alt="A Johannes Vermeer style painting of a laptop"
						title="A Johannes Vermeer style painting of a laptop"
						class="rounded-xl shadow-xl shadow-stone-200 dark:shadow-stone-800" />
				</div>

				<div class="mt-10 md:mt-0">
					<img
						src="/images/dalle-smartphone.png"
						alt="A Johannes Vermeer style painting of a laptop"
						title="A Johannes Vermeer style painting of a laptop"
						class="rounded-xl shadow-xl shadow-stone-200 dark:shadow-stone-800" />
				</div>
				<div class="space-y-2">
					<div class="mb-6 flex gap-4">
						<div class="inline-block h-8 rounded bg-[#77a2bc]  p-1.5  text-stone-100">
							<Phone />
						</div>
						<h3 class="text-xl font-semibold text-stone-800 dark:text-stone-100">Apps</h3>
					</div>
					<p class="text-lg text-stone-700 dark:text-stone-200">
						Webapp of smartphone app nodig? Ik maak ze voor je, met een mooie interface en een goede
						gebruikerservaring.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="portfolio" class="md:my-24">
		<div class="container">
			<header class="space-y-2 py-20 text-center">
				<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">
					Mijn laatste projecten
				</h1>
			</header>
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
				<a
					href="https://bizzfit.app"
					target="_blank"
					class="rounded-lg bg-stone-50 shadow-md hover:shadow-lg dark:bg-stone-800">
					<img src="" class="h-20 rounded-t-lg" alt="" />
					<div class="space-y-4 p-5">
						<h3 class="text-xl font-semibold text-stone-800 dark:text-stone-100">BizzFit</h3>
						<p class="text-stone-700 dark:text-stone-200">
							BizzFit is een app voor ondernemers die hun bedrijf willen verbeteren. Hiervoor ben ik
							bezig met de ontwikkeling van de app en de landing page.
						</p>
						<p class="font-semibold text-amber-600">Klik hier voor meer</p>
					</div>
				</a>
				<a
					href="https://occultagency.com"
					target="_blank"
					class="rounded-lg bg-stone-50 shadow-md hover:shadow-lg dark:bg-stone-800">
					<img src="" class="h-20 rounded-t-lg" alt="" />
					<div class="space-y-4 p-5">
						<h3 class="text-xl font-semibold text-stone-800 dark:text-stone-100">Occult.agency</h3>
						<p class="text-stone-700 dark:text-stone-200">
							Een website voor een agentschap in de muziekindustrie. Hiervoor heb ik een Wordpress
							thema gebouwd.
						</p>
						<p class="font-semibold text-neutral-600 dark:text-neutral-300">Klik hier voor meer</p>
					</div>
				</a>
			</div>
		</div>
	</section>

	<section id="contact" class="md:my-24">
		<div class="container">
			<header class="space-y-2 py-20 text-center">
				<h1 class="text-3xl font-bold text-stone-800 dark:text-stone-100">
					Neem contact met mij op
				</h1>
			</header>
			<div class="text-center">
				<h3 class="mb-4 text-xl text-stone-800 dark:text-stone-100">
					Samen werken? Stuur me een berichtje via een van deze kanalen!
				</h3>
				<div class="inline-flex gap-5 p-10">
					<a
						href="https://linkedin.com/in/thomas-mol"
						target="_blank"
						class=" inline-flex h-12 w-12 gap-2 p-1 font-semibold text-stone-700 hover:text-stone-400 dark:text-stone-200">
						<Linkedin />
					</a>
					<a
						href="https://twitter.com/thomas_a_mol"
						target="_blank"
						class="inling-flex h-12 w-12 gap-2 p-1 font-semibold text-stone-700 hover:text-stone-400 dark:text-stone-200">
						<Twitter />
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="bg-stone-100 dark:bg-stone-800">
	<div class="container space-y-4 py-6">
		<div class="flex flex-col gap-1 text-left text-stone-600 dark:text-stone-300">
			<small><strong>KVK</strong> 80831486</small>
			<small><strong>BTW-id</strong> NL003493681B76</small>
			<small><strong>IBAN</strong> NL64 ASNB 0267 1595 44</small>
		</div>
		<p class="text-left text-sm font-semibold capitalize text-stone-500 dark:text-stone-400">
			&copy; {currentYear} Thomas Mol
		</p>
	</div>
</footer>
