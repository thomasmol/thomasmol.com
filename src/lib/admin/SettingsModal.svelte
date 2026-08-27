<script lang="ts">
	type SettingsSection = 'account' | 'integrations';

	let {
		section,
		onnavigate,
		onclose
	}: {
		section: SettingsSection;
		onnavigate: (section: SettingsSection, event?: MouseEvent) => Promise<void>;
		onclose: () => Promise<void>;
	} = $props();
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center p-5 sm:p-8">
	<button type="button" aria-label="Close settings" onclick={onclose} class="absolute inset-0 bg-olive-950/60"></button>
	<div aria-labelledby="settings-title" aria-modal="true" role="dialog" class="relative w-full max-w-xl rounded-xl border border-olive-300 bg-olive-50 p-5 shadow-xl dark:border-olive-700 dark:bg-olive-950 sm:p-7">
		<header class="flex items-start justify-between gap-4">
			<div>
				<p class="text-sm text-olive-600 dark:text-olive-400">Admin</p>
				<h2 id="settings-title" class="mt-1 text-2xl font-semibold tracking-tight">Settings</h2>
			</div>
			<button type="button" aria-label="Close settings" onclick={onclose} class="rounded-lg border border-olive-300 px-3 py-1.5 text-sm dark:border-olive-700">Close</button>
		</header>

		<nav aria-label="Settings sections" class="mt-6 flex gap-2 border-b border-olive-300 pb-4 dark:border-olive-700">
			<a href="/admin/settings/account" aria-current={section === 'account' ? 'page' : undefined} onclick={(event) => onnavigate('account', event)} class:font-semibold={section === 'account'} class="rounded-lg px-3 py-2 text-sm hover:bg-olive-200 dark:hover:bg-olive-800">Account</a>
			<a href="/admin/settings/integrations" aria-current={section === 'integrations' ? 'page' : undefined} onclick={(event) => onnavigate('integrations', event)} class:font-semibold={section === 'integrations'} class="rounded-lg px-3 py-2 text-sm hover:bg-olive-200 dark:hover:bg-olive-800">Integrations</a>
		</nav>

		<div class="py-8">
			{#if section === 'account'}
				<h3 class="text-xl font-semibold">Account</h3>
				<p class="mt-2 text-olive-600 dark:text-olive-400">Manage your admin profile and sign-in details here.</p>
			{:else}
				<h3 class="text-xl font-semibold">Integrations</h3>
				<p class="mt-2 text-olive-600 dark:text-olive-400">Connect external services to your portfolio here.</p>
			{/if}
		</div>
	</div>
</div>
