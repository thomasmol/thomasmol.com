<script lang="ts">
	import { twoFactorClient } from 'better-auth/client/plugins';
	import { createAuthClient } from 'better-auth/svelte';

	let email = $state('');
	let password = $state('');
	let totp = $state('');
	let needsTwoFactor = $state(false);
	let busy = $state(false);
	let message = $state('');

	const authClient = createAuthClient({
		plugins: [
			twoFactorClient({
				onTwoFactorRedirect() {
					needsTwoFactor = true;
				}
			})
		]
	});

	async function signIn(event: SubmitEvent) {
		event.preventDefault();
		busy = true;
		message = '';

		try {
			const result = await authClient.signIn.email({ email, password });
			busy = false;

			if (result.error) {
				message = result.error.message ?? 'Sign in failed.';
				return;
			}

			if (needsTwoFactor) return;

			location.assign('/admin');
		} catch {
			busy = false;
			message = 'Sign in failed. Check your connection.';
		}
	}

	async function verifyTotp(event: SubmitEvent) {
		event.preventDefault();
		busy = true;
		message = '';

		try {
			const result = await authClient.twoFactor.verifyTotp({ code: totp, trustDevice: true });
			busy = false;

			if (result.error) {
				message = result.error.message ?? 'The code is not valid.';
				return;
			}

			location.assign('/admin');
		} catch {
			busy = false;
			message = 'Verification failed. Check your connection.';
		}
	}
</script>

<svelte:head>
	<title>Admin - Thomas Mol</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="min-h-dvh bg-olive-50 px-5 py-12 font-serif text-olive-900 antialiased sm:px-8 dark:bg-olive-950 dark:text-olive-100">
	<div class="mx-auto max-w-sm pt-12 sm:pt-24">
		<a href="/" class="text-sm underline underline-offset-2">&lt;- Home</a>
		<h1 class="mt-8 text-3xl font-semibold tracking-tight">Admin sign in</h1>
		{#if needsTwoFactor}
			<form onsubmit={verifyTotp} class="mt-8 space-y-5">
				<label class="block"><span class="mb-2 block text-sm">Authentication code</span><input bind:value={totp} inputmode="numeric" autocomplete="one-time-code" required class="w-full rounded-lg border border-olive-300 bg-white px-3 py-2 outline-none focus:border-olive-700 dark:border-olive-700 dark:bg-olive-900" /></label>
				<button type="submit" disabled={busy} class="w-full rounded-lg bg-olive-900 px-4 py-2 text-olive-50 disabled:opacity-50 dark:bg-olive-100 dark:text-olive-950">{busy ? 'Checking...' : 'Verify code'}</button>
			</form>
		{:else}
			<form onsubmit={signIn} class="mt-8 space-y-5">
				<label class="block"><span class="mb-2 block text-sm">Email</span><input bind:value={email} type="email" autocomplete="email" required class="w-full rounded-lg border border-olive-300 bg-white px-3 py-2 outline-none focus:border-olive-700 dark:border-olive-700 dark:bg-olive-900" /></label>
				<label class="block"><span class="mb-2 block text-sm">Password</span><input bind:value={password} type="password" autocomplete="current-password" required class="w-full rounded-lg border border-olive-300 bg-white px-3 py-2 outline-none focus:border-olive-700 dark:border-olive-700 dark:bg-olive-900" /></label>
				<button type="submit" disabled={busy} class="w-full rounded-lg bg-olive-900 px-4 py-2 text-olive-50 disabled:opacity-50 dark:bg-olive-100 dark:text-olive-950">{busy ? 'Signing in...' : 'Sign in'}</button>
			</form>
		{/if}
		{#if message}<p class="mt-4 text-sm text-red-700 dark:text-red-300">{message}</p>{/if}
	</div>
</main>
