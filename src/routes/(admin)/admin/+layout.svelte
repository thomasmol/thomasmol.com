<script lang="ts">
	import { page } from '$app/state';
	import { createAuthClient } from 'better-auth/svelte';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import HistoryIcon from '@lucide/svelte/icons/history';
	import ImageIcon from '@lucide/svelte/icons/image';
	import LayoutDashboardIcon from '@lucide/svelte/icons/layout-dashboard';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import ScrollTextIcon from '@lucide/svelte/icons/scroll-text';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import * as Sidebar from '#lib/components/ui/sidebar/index.js';

	let { children } = $props();
	const authClient = createAuthClient();

	async function signOut() {
		const result = await authClient.signOut();
		if (!result.error) location.reload();
	}
</script>

<Sidebar.Provider>
	<Sidebar.Root collapsible="icon">
		<Sidebar.Header>
			<Sidebar.Menu>
				<Sidebar.MenuItem>
					<Sidebar.MenuButton tooltipContent="View site">
						{#snippet child({ props })}
							<a href="/" {...props}><ExternalLinkIcon /><span>View site</span></a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			</Sidebar.Menu>
		</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton tooltipContent="Overview" isActive={page.url.pathname === '/admin' && !page.url.hash}>
								{#snippet child({ props })}
									<a href="/admin" {...props}><LayoutDashboardIcon /><span>Overview</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton tooltipContent="Media" isActive={page.url.pathname === '/admin' && page.url.hash === '#media'}>
								{#snippet child({ props })}
									<a href="/admin#media" {...props}><ImageIcon /><span>Media</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton tooltipContent="Revisions" isActive={page.url.pathname === '/admin' && page.url.hash === '#revisions'}>
								{#snippet child({ props })}
									<a href="/admin#revisions" {...props}><HistoryIcon /><span>Revisions</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton tooltipContent="Audit" isActive={page.url.pathname === '/admin' && page.url.hash === '#audit'}>
								{#snippet child({ props })}
									<a href="/admin#audit" {...props}><ScrollTextIcon /><span>Audit</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton tooltipContent="Settings" isActive={page.url.pathname.startsWith('/admin/settings/')}>
								{#snippet child({ props })}
									<a href="/admin/settings/account" {...props}><SettingsIcon /><span>Settings</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
		<Sidebar.Footer class="border-t">
			<Sidebar.Menu>
				<Sidebar.MenuItem>
					<Sidebar.MenuButton type="button" tooltipContent="Sign out" onclick={signOut}>
						<LogOutIcon /><span>Sign out</span>
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			</Sidebar.Menu>
		</Sidebar.Footer>
	</Sidebar.Root>
	<div class="flex min-w-0 flex-1 flex-col">
		<header class="flex h-12 shrink-0 items-center border-b px-3">
			<Sidebar.Trigger />
		</header>
		<main class="min-w-0 flex-1 p-4 md:p-6">
			{@render children()}
		</main>
	</div>
</Sidebar.Provider>
