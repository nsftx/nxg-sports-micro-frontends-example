<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { loadMicroFrontendModule } from '@nsftx/nxg-sports-micro-frontends-example-shared/integrator'

onBeforeMount(async () => {
  const { registerRecommendedBetslipsWidget } = await loadMicroFrontendModule()
  if (!customElements.get('recommended-betslips')) registerRecommendedBetslipsWidget({})
})

const router = useRouter()

const navigateToSportsbook = () => {
  router.push('/sportsbook/homepage')
}
</script>

<template>
  <div class="home-container">
    <header class="header">
      <h1>Welcome to NXG Sportsbook</h1>
      <p class="subtitle">Your ultimate sports destination</p>
    </header>

    <nav class="navigation">
      <button class="nav-button" @click="navigateToSportsbook">Go to Sportsbook</button>
    </nav>

    <main class="content">
      <recommended-betslips id="recommended-betslips" />
    </main>
  </div>
</template>
