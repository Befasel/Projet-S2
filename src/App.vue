<script setup lang="ts">
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import HeroPage from './components/HeroPage.vue'
import aboutus from './components/aboutus.vue'
import wheels from './components/wheels.vue'
import { RouterView } from 'vue-router';

</script>

<template >
  <HeaderPage />
  <RouterView />
  <FooterPage />
</template>
