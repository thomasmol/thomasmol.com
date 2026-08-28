<script lang="ts">
	import PlugIcon from '@lucide/svelte/icons/plug';
	import UserRoundIcon from '@lucide/svelte/icons/user-round';
	import * as Breadcrumb from '#lib/components/ui/breadcrumb/index.js';
	import * as Dialog from '#lib/components/ui/dialog/index.js';
	import * as Sidebar from '#lib/components/ui/sidebar/index.js';

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

	async function handleOpenChange(open: boolean) {
		if (open) return;

		await onclose();
	}
</script>

<Dialog.Root open={true} onOpenChange={handleOpenChange}>
	<Dialog.Content class="h-[min(40rem,calc(100svh-2rem))] w-[calc(100%-2rem)] max-w-none overflow-hidden p-0 sm:max-w-[640px] md:max-h-[640px] md:max-w-[700px] lg:max-w-[800px]">
		<Dialog.Title class="sr-only">Settings</Dialog.Title>
		<Dialog.Description class="sr-only">Admin settings</Dialog.Description>

		<Sidebar.Provider class="min-h-0 items-start" style="--sidebar-width: 13rem;">
			<Sidebar.Root collapsible="none" class="hidden border-r md:flex py-1">
				<Sidebar.Content>
					<Sidebar.Group>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton isActive={section === 'account'}>
										{#snippet child({ props })}
											<a href="/admin/settings/account" onclick={(event) => onnavigate('account', event)} aria-current={section === 'account' ? 'page' : undefined} {...props}>
												<UserRoundIcon />
												<span>Account</span>
											</a>
										{/snippet}
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton isActive={section === 'integrations'}>
										{#snippet child({ props })}
											<a href="/admin/settings/integrations" onclick={(event) => onnavigate('integrations', event)} aria-current={section === 'integrations' ? 'page' : undefined} {...props}>
												<PlugIcon />
												<span>Integrations</span>
											</a>
										{/snippet}
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				</Sidebar.Content>
			</Sidebar.Root>

			<div class="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
				<header class="flex h-12 shrink-0 items-center border-b px-4">
					<Breadcrumb.Root>
						<Breadcrumb.List>
							<Breadcrumb.Item>
								<Breadcrumb.Link href="/admin/settings/account" onclick={(event) => onnavigate('account', event)}>Settings</Breadcrumb.Link>
							</Breadcrumb.Item>
							<Breadcrumb.Separator />
							<Breadcrumb.Item>
								<Breadcrumb.Page>{section === 'account' ? 'Account' : 'Integrations'}</Breadcrumb.Page>
							</Breadcrumb.Item>
						</Breadcrumb.List>
					</Breadcrumb.Root>
				</header>

				<nav aria-label="Settings sections" class="flex shrink-0 gap-1 border-b p-2 md:hidden">
					<a href="/admin/settings/account" aria-current={section === 'account' ? 'page' : undefined} data-active={section === 'account'} onclick={(event) => onnavigate('account', event)} class="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground">Account</a>
					<a href="/admin/settings/integrations" aria-current={section === 'integrations' ? 'page' : undefined} data-active={section === 'integrations'} onclick={(event) => onnavigate('integrations', event)} class="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground">Integrations</a>
				</nav>

				<section class="flex-1 overflow-y-auto p-4 sm:p-6">
					{#if section === 'account'}
						<h3 class="text-xl font-semibold">Account</h3>
						<p class="mt-2 text-muted-foreground">Manage your admin profile and sign-in details here.</p>
					{:else}
						<h3 class="text-xl font-semibold">Integrations</h3>
						<p class="mt-2 text-muted-foreground">Connect external services to your portfolio here.</p>
					{/if}
				</section>
			</div>
		</Sidebar.Provider>
	</Dialog.Content>
</Dialog.Root>
