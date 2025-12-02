<script>
import { goto } from '$app/navigation';
import { createIntegratorInstance } from "@nsftx/nxg-sports-micro-frontends-example-shared/integrator";
import "@nsftx/nxg-sports-micro-frontends-example-shared/style";

createIntegratorInstance(goto);

let { children } = $props();
</script>

{@render children()}
