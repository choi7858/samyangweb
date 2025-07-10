<template>
  <div class="layout-wrapper">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer },
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 64px;
  /* 헤더 높이만큼 여백 */
}

.bg-pattern {
  background-image: url('@/assets/images/backgrounds/bg-pattern.png');
  background-repeat: repeat;
  background-size: 25%;
}

body {
  font-family: sans-serif;
}
</style>
