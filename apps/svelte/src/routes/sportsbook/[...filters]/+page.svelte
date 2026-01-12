<script>
import { onMount } from 'svelte';
import { MICRO_FRONTEND_URL } from '@nsftx/nxg-sports-micro-frontends-example-shared/constants';

onMount(async () => {
	const { registerSportsbookMicroFrontend } = await import(MICRO_FRONTEND_URL);
		
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
