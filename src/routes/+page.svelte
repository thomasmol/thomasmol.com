<script lang="ts">
	import { setContext } from 'svelte';
	import { isHttpError } from '@sveltejs/kit';
	import { KeyMapper, Session, Svedit, define_keymap, type Document } from 'svedit';
	import { getHomeContent, saveHomeContent } from '#lib/content.remote.js';
	import { portfolioConfig } from '#lib/editor/config.js';
	import { portfolioSchema } from '#lib/editor/schema.js';

	const data = await getHomeContent();
	let savedDocument = $state<Document>(data.document);
	let revision = $state(data.revision);
	let session = $state(new Session(portfolioSchema, data.document, portfolioConfig));
	let editable = $state(false);
	let saving = $state(false);
	let saveError = $state('');

	const keyMapper = new KeyMapper();
	const appKeymap = define_keymap({
		'meta+e,ctrl+e': [{ is_enabled: () => data.isAdmin, execute: toggleEdit }],
		'meta+s,ctrl+s': [{ is_enabled: () => editable && !saving, execute: save }]
	});
	keyMapper.push_scope(appKeymap);
	setContext('key_mapper', keyMapper);

	function toggleEdit() {
		editable = !editable;
		saveError = '';
	}

	function cancel() {
		session = new Session(portfolioSchema, savedDocument, portfolioConfig);
		editable = false;
		saveError = '';
	}

	async function save() {
		if (saving) return;
		saving = true;
		saveError = '';

		try {
			const result = await saveHomeContent({ data: session.to_json(), revision });
			revision = result.revision;
			savedDocument = session.to_json();
			editable = false;
		} catch (error) {
			if (isHttpError(error, 409)) {
				saveError = 'This page changed. Reload it before you save.';
				return;
			}

			saveError = 'Save failed. Check your connection.';
		} finally {
			saving = false;
		}
	}
</script>

<svelte:head>
	<title>Thomas Mol - Founding Engineer</title>
	<meta name="description" content="I am a founding engineer who builds AI products and performant applications with thoughtful UI/UX." />
	<link rel="canonical" href="https://thomasmol.com/" />
	<meta property="og:title" content="Thomas Mol - Founding Engineer" />
	<meta property="og:description" content="I am a founding engineer who builds AI products and performant applications with thoughtful UI/UX." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://thomasmol.com/" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<svelte:window onkeydown={(event) => keyMapper.handle_keydown(event)} />

<Svedit {session} path={[session.doc.document_id]} bind:editable />

{#if data.isAdmin}
	{#if editable}
		<div class="fixed right-4 bottom-4 left-4 z-50 flex items-center justify-end gap-2 rounded-xl border border-olive-300 bg-olive-50/95 p-3 font-serif text-sm text-olive-900 shadow-lg backdrop-blur sm:left-auto dark:border-olive-700 dark:bg-olive-950/95 dark:text-olive-100">
			{#if saveError}<p class="mr-auto max-w-xs text-red-700 dark:text-red-300">{saveError}</p>{/if}
			<button type="button" onclick={cancel} class="rounded-lg border border-olive-300 px-4 py-2 hover:bg-olive-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:border-olive-700 dark:hover:bg-olive-900">Cancel</button>
			<button type="button" onclick={save} disabled={saving} class="rounded-lg bg-olive-900 px-4 py-2 text-olive-50 hover:bg-olive-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:opacity-50 dark:bg-olive-100 dark:text-olive-950 dark:hover:bg-white">{saving ? 'Saving...' : 'Save'}</button>
		</div>
	{:else}
		<button type="button" onclick={toggleEdit} class="fixed right-4 bottom-4 z-50 rounded-full border border-olive-300 bg-olive-50/95 px-4 py-2 font-serif text-sm text-olive-900 shadow-lg backdrop-blur hover:bg-olive-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:border-olive-700 dark:bg-olive-950/95 dark:text-olive-100 dark:hover:bg-olive-900">Edit</button>
	{/if}
{/if}
