<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	
</script>
<svelte:head>
	<script defer data-domain="thomasmol.com" src="https://plausible.io/js/script.js"></script>
	<meta name="og:url" content="{$page.url.toString()}" />
	<meta name="twitter:url" content="{$page.url.toString()}" />
	<meta name="linkedin:url" content="{$page.url.toString()}" />
	<meta name="canonical" content="{$page.url.toString()}" />
</svelte:head>

<slot />
