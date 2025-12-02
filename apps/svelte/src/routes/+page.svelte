<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';

onMount(async () => {
	const { registerRecommendedBetslipsWidget } =
		await import('http://localhost:8080/src/builds/micro-frontends/index.ts');
	if (!customElements.get('recommended-betslips')) registerRecommendedBetslipsWidget({});
});
</script>

<div class="home-container">
	<header class="header">
		<h1>Welcome to NXG Sportsbook</h1>
		<p class="subtitle">Your ultimate sports destination</p>
	</header>

	<nav class="navigation">
		<button class="nav-button" on:click={() => goto('/sportsbook')}>Go to Sportsbook</button>
	</nav>

	<main class="content">
		<recommended-betslips id="recommended-betslips"></recommended-betslips>
	</main>
</div>
