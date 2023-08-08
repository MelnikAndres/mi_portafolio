<template>
  <div>
    <FlechaAbajo/>
    <InicioContainer/>
    <ProyectosContainer/>
    <SobreMi/>
    <DetallesFondo/>
  </div>
</template>
<script lang="ts" setup>
import InicioContainer from '@/components/InicioContainer.vue';
import ProyectosContainer from '@/components/ProyectosContainer.vue'
import SobreMi from '@/components/SobreMi.vue';
import FlechaAbajo from '@/components/FlechaAbajo.vue';
import DetallesFondo from '@/components/DetallesFondo.vue';
</script>

<style lang="scss" scoped>

h2{
  font-weight: lighter;
}
</style>
