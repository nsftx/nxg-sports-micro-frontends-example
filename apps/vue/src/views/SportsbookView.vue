<script setup>
import { registerSportsbookMicroFrontend } from 'http://localhost:8080/src/builds/micro-frontends/index.ts'

if (!customElements.get('nsftx-sports-web'))
  registerSportsbookMicroFrontend({
    basePath: '/sportsbook',
    routeMappings: {},
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

<style>
:root {
  --header-height: 3rem;

  --parent-offset: var(--header-height);
  --parent-bottom-offset: 0;
}
</style>

<style scoped>
@import '../../../shared/sportsbook-view.css';
</style>
