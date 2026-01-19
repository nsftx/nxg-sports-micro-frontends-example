<script setup>
import { onBeforeMount } from 'vue'
import { loadMicroFrontendModule } from '@nsftx/nxg-sports-micro-frontends-example-shared/integrator'

onBeforeMount(async () => {
  const { registerSportsbookMicroFrontend } = await loadMicroFrontendModule()

  if (!customElements.get('nsftx-sports-web'))
    registerSportsbookMicroFrontend({
      basePath: '/sportsbook',
      routeMappings: {},
    })
})
</script>

<template>
  <div class="sportsbook-page">
    <header>Sportsbook</header>
    <div class="sportsbook-content">
      <nsftx-sports-web id="sportsbook">
        // eslint-disable-next-line vue/no-deprecated-slot-attribute
        <div class="nsftx-sportsbook-footer" slot="nsftxFooter">
          <span>Copyright © 2026</span>
        </div>
      </nsftx-sports-web>
    </div>
  </div>
</template>
