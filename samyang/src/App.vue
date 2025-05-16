<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer },
}
</script>

<style>
/* 전역 스타일은 여기 또는 별도 CSS/SCSS 파일에 작성 */
body {
  margin: 0;
  font-family: sans-serif;
  padding-top: 64px;
}
</style>
