<template>
  <div class="container">
      <router-link class="link" to="/about">Melnik Andres</router-link>
  </div>
</template>

<script lang="ts" setup>
import LightContainer from '@/components/LightContainer.vue';
</script>


<style lang="scss" scoped>
.container{
  display:grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;
}
.link{
  font-size: 1.8em;
  text-decoration: none;
  color: $color-texto;
  line-height: 0.9em;
  opacity: 0.8;
  animation: click-me 1.2s ease 0s infinite alternate;
  z-index: 100;
}
.link:hover{
  opacity: 1 !important;
  animation: none;
}
@keyframes click-me{
  0%{
    opacity: 0.45;
  }
  100%{
    opacity: 0.85;
  }
}
</style>
