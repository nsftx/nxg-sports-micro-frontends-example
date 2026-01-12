<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import { createIntegratorInstance } from "@nsftx/nxg-sports-micro-frontends-example-shared/integrator";
import { IGNITE_SDK_URL } from "@nsftx/nxg-sports-micro-frontends-example-shared/constants";
import "@nsftx/nxg-sports-micro-frontends-example-shared/style";

onMount(() => {
	// Load Ignite SDK (browser only)
	const script = document.createElement('script');
	script.src = IGNITE_SDK_URL;
	script.onload = () => createIntegratorInstance(goto);
	document.head.appendChild(script);
});

let { children } = $props();
</script>

{@render children()}
