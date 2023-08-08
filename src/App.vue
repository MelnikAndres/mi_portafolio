<script lang="ts" setup>
import LightContainer from './components/LightContainer.vue';
</script>
<template>
    <LightContainer/>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
#app {
  font-family: Courier New,Courier, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-texto;
}
body{
  margin: 0;
  background-color: $color-fondo;
  overflow-x: hidden;
  overflow-y: auto;
}
.fade-enter-active {
  transition: filter,opacity 0.5s ease;
  transition: opacity 1.5s ease;
}
.fade-leave-active{
  transition: filter,opacity 0.5s ease;
  transition: opacity 1.5s ease;
}
.fade-enter-from{
  filter:blur(3px);
  opacity: 0;
  position: fixed !important;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  user-select: none;
}
.fade-leave-to {
  filter:blur(3px);
  opacity: 0;
  position: fixed !important;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  user-select: none;
}
* {
  scrollbar-width: thin;
  scrollbar-color: #62C9C9 #DFE9EB;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #DFE9EB;
}

*::-webkit-scrollbar-track:hover {
  background-color: #DFE9EB;
}

*::-webkit-scrollbar-track:active {
  background-color: #DFE9EB;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #62C9C9;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #23AAAA;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #219E9E;
}
</style>
