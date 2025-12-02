<script setup>
import { useRouter } from 'vue-router'
import { createIntegratorInstance } from '@nsftx/nxg-sports-micro-frontends-example-shared/integrator'

const router = useRouter()
createIntegratorInstance(router.push)
</script>

<template>
  <router-view />
</template>

<style scoped></style>
