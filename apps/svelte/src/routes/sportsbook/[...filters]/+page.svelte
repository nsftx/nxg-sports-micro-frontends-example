<script>
import { onMount } from 'svelte';
import { loadMicroFrontendModule } from '@nsftx/nxg-sports-micro-frontends-example-shared/integrator';

onMount(async () => {
	const { registerSportsbookMicroFrontend } = await loadMicroFrontendModule();
		
	if (!customElements.get('nsftx-sports-web'))
		registerSportsbookMicroFrontend({ basePath: '/sportsbook', routeMappings: {} });
});
</script>

<div class="sportsbook-page">
	<header>Sportsbook</header>
	<div class="sportsbook-content">
		<nsftx-sports-web id="sportsbook"></nsftx-sports-web>
	</div>
</div>
