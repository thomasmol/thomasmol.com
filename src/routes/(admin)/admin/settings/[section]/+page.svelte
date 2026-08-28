<script lang="ts">
	import { page } from '$app/state';
	import Panel from '#lib/admin/Panel.svelte';

	function getSection(section: string | undefined) {
		if (section === 'integrations') return 'integrations';
		return 'account';
	}
</script>

<Panel directSetting={getSection(page.params.section)} />
