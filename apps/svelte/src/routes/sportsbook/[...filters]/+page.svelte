<script>
import { onMount } from 'svelte';

onMount(async () => {
	const { registerSportsbookMicroFrontend } =
		await import('http://localhost:8080/src/builds/micro-frontends/index.ts');
		
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
