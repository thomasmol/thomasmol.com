<script lang="ts">
	import { page } from '$app/state';
	import HistoryIcon from '@lucide/svelte/icons/history';
	import HouseIcon from '@lucide/svelte/icons/house';
	import ImageIcon from '@lucide/svelte/icons/image';
	import LayoutDashboardIcon from '@lucide/svelte/icons/layout-dashboard';
	import ScrollTextIcon from '@lucide/svelte/icons/scroll-text';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import * as Sidebar from '#lib/components/ui/sidebar/index.js';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<Sidebar.Root>
		<Sidebar.Header class="border-b">
			<div class="px-2 py-1 text-sm font-semibold">Portfolio admin</div>
		</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Manage</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton isActive={page.url.pathname === '/admin' && !page.url.hash}>
								{#snippet child({ props })}
									<a href="/admin" {...props}><LayoutDashboardIcon /><span>Overview</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton isActive={page.url.pathname === '/admin' && page.url.hash === '#media'}>
								{#snippet child({ props })}
									<a href="/admin#media" {...props}><ImageIcon /><span>Media</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton isActive={page.url.pathname === '/admin' && page.url.hash === '#revisions'}>
								{#snippet child({ props })}
									<a href="/admin#revisions" {...props}><HistoryIcon /><span>Revisions</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton isActive={page.url.pathname === '/admin' && page.url.hash === '#audit'}>
								{#snippet child({ props })}
									<a href="/admin#audit" {...props}><ScrollTextIcon /><span>Audit</span></a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton isActive={page.url.pathname.startsWith('/admin/settings/')}>
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
					<Sidebar.MenuButton isActive={page.url.pathname === '/'}>
						{#snippet child({ props })}
							<a href="/" {...props}><HouseIcon /><span>Homepage</span></a>
						{/snippet}
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
