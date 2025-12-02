<script setup>
import { useRouter } from 'vue-router'
import { registerRecommendedBetslipsWidget } from 'http://localhost:8080/src/builds/micro-frontends/index.ts'

if (!customElements.get('recommended-betslips')) registerRecommendedBetslipsWidget({})

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

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header {
  text-align: center;
  color: white;
  margin-top: 40px;
}

.header h1 {
  font-size: 3rem;
  margin: 0;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  margin: 10px 0 0 0;
  opacity: 0.9;
}

.navigation {
  margin: 20px 0;
}

.nav-button {
  padding: 12px 30px;
  font-size: 1rem;
  background-color: white;
  color: #667eea;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  background-color: #f0f0f0;
}

.nav-button:active {
  transform: translateY(0);
}

.content {
  width: 100%;
}
</style>
