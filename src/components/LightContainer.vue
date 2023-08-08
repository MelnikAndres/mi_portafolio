<template>
<div class="light-container">
    <div id="mouse-light" class="light"></div>
</div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';
onMounted(() => {
    const light = document.getElementById("mouse-light")
  document.addEventListener('mousemove', event=>{
    setTimeout(() => {
      light?.style.setProperty('--x-pos',event.clientX-150 + "px");
      light?.style.setProperty('--y-pos',event.clientY-150 + "px");
    }, 70);
})
})

</script>


<style lang="scss" scoped>
.light{
  top: 0;
  left: 0;
  position: relative;
  height: 300px;
  width: 300px;
  background:radial-gradient(rgba(255, 255, 255, 0.6),transparent 70%);
  border-radius: 100%;
  transform: translate(var(--x-pos),var(--y-pos));
  pointer-events: none;
  z-index: 0;
}
.light-container{
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: 0;
}
</style>