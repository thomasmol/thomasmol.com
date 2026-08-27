<script lang="ts">
	import { page } from '$app/state';
	import AdminEnvironment from '#lib/admin/AdminEnvironment.svelte';

	function getSection(section: string | undefined) {
		if (section === 'integrations') return 'integrations';
		return 'account';
	}
</script>

<AdminEnvironment directSetting={getSection(page.params.section)} />
