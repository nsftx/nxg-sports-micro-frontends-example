<script setup>
import { onBeforeMount } from 'vue'
import { MICRO_FRONTEND_URL } from '@nsftx/nxg-sports-micro-frontends-example-shared/constants'

onBeforeMount(async () => {
  const { registerSportsbookMicroFrontend } = await import(MICRO_FRONTEND_URL)

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
      <nsftx-sports-web id="sportsbook" />
    </div>
  </div>
</template>
