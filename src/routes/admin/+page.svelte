<script lang="ts">
	import { createAuthClient } from 'better-auth/svelte';
	import { twoFactorClient } from 'better-auth/client/plugins';
	import { getAdminContent, uploadMedia } from '#lib/content.remote.js';

	const data = await getAdminContent();
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

	const dateFormat = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });

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

			location.reload();
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

			location.reload();
		} catch {
			busy = false;
			message = 'Verification failed. Check your connection.';
		}
	}

	async function signOut() {
		const result = await authClient.signOut();
		if (!result.error) location.reload();
	}

	const enhancedUpload = uploadMedia.enhance(async (form) => {
		busy = true;
		message = '';

		try {
			const result = await form.submit();
			if (!result) {
				message = 'Upload failed.';
				return;
			}

			form.element.reset();
			await getAdminContent().refresh();
		} catch {
			message = 'Upload failed. Check your connection.';
		} finally {
			busy = false;
		}
	});
</script>

<svelte:head>
	<title>Admin - Thomas Mol</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="min-h-dvh bg-olive-50 px-5 py-12 font-serif text-olive-900 antialiased sm:px-8 dark:bg-olive-950 dark:text-olive-100">
	{#if !data.user || !data.overview}
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
	{:else}
		<div class="mx-auto max-w-5xl">
			<header class="flex flex-wrap items-start justify-between gap-4 border-b border-olive-300 pb-6 dark:border-olive-700">
				<div><p class="text-sm">Signed in as {data.user.email}</p><h1 class="mt-1 text-3xl font-semibold tracking-tight">Portfolio admin</h1></div>
				<div class="flex gap-2"><a href="/" class="rounded-lg border border-olive-300 px-4 py-2 text-sm dark:border-olive-700">Edit homepage</a><button type="button" onclick={signOut} class="rounded-lg border border-olive-300 px-4 py-2 text-sm dark:border-olive-700">Sign out</button></div>
			</header>

			<div class="mt-8 grid gap-8 lg:grid-cols-2">
				<section class="rounded-xl border border-olive-300 p-5 dark:border-olive-700">
					<p class="text-sm text-olive-600 dark:text-olive-400">Current document revision</p><p class="mt-2 text-4xl font-semibold">{data.overview.document.revision}</p>
				</section>
				<section class="rounded-xl border border-olive-300 p-5 dark:border-olive-700">
					<h2 class="text-xl font-semibold">Upload media</h2>
					<form {...enhancedUpload} enctype="multipart/form-data" class="mt-4 flex flex-col gap-3 sm:flex-row"><input {...uploadMedia.fields.file.as('file')} accept="image/*,video/*" required class="min-w-0 flex-1 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-olive-200 file:px-3 file:py-2 dark:file:bg-olive-800 dark:file:text-olive-100" /><button type="submit" disabled={busy} class="rounded-lg bg-olive-900 px-4 py-2 text-sm text-olive-50 disabled:opacity-50 dark:bg-olive-100 dark:text-olive-950">{busy ? 'Uploading...' : 'Upload'}</button></form>
					{#if message}<p class="mt-3 text-sm text-red-700 dark:text-red-300">{message}</p>{/if}
				</section>

				<section>
					<h2 class="mb-4 text-xl font-semibold">Recent revisions</h2>
					<div class="overflow-x-auto rounded-xl border border-olive-300 dark:border-olive-700"><table class="w-full text-left text-sm"><thead class="border-b border-olive-300 dark:border-olive-700"><tr><th class="px-4 py-3 font-semibold">Revision</th><th class="px-4 py-3 font-semibold">Saved</th></tr></thead><tbody>{#each data.overview.revisions as item (item.id)}<tr class="border-b border-olive-200 last:border-0 dark:border-olive-800"><td class="px-4 py-3">{item.revision}</td><td class="whitespace-nowrap px-4 py-3">{dateFormat.format(item.createdAt)}</td></tr>{/each}</tbody></table></div>
				</section>
				<section>
					<h2 class="mb-4 text-xl font-semibold">Audit log</h2>
					<ul class="divide-y divide-olive-200 rounded-xl border border-olive-300 dark:divide-olive-800 dark:border-olive-700">{#each data.overview.logs as log (log.id)}<li class="p-4 text-sm"><p class="font-semibold">{log.action}</p><p class="mt-1 text-olive-600 dark:text-olive-400">{log.targetType}: {log.targetId} - {dateFormat.format(log.createdAt)}</p></li>{/each}</ul>
				</section>
				<section class="lg:col-span-2">
					<h2 class="mb-4 text-xl font-semibold">Media</h2>
					<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{#each data.overview.media as asset (asset.id)}<li class="overflow-hidden rounded-xl border border-olive-300 dark:border-olive-700">{#if asset.mimeType.startsWith('image/')}<img src="/media/{asset.id}" alt="" class="aspect-video w-full bg-olive-100 object-cover dark:bg-olive-900" />{:else}<video src="/media/{asset.id}" controls muted class="aspect-video w-full bg-black"></video>{/if}<div class="p-3 text-sm"><p class="truncate font-semibold">{asset.originalName}</p><p class="mt-1 text-olive-600 dark:text-olive-400">{Math.ceil(asset.bytes / 1024)} KB</p></div></li>{/each}</ul>
				</section>
			</div>
		</div>
	{/if}
</main>
