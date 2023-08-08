<template>
    <div ref="container" class="container" :style="{'--fondo-path': fondoPath}">
        <h1>Una Pagina Web</h1>
        <h2>Le da vida a tu marca</h2>
        <p>Hagamosla realidad</p>
    </div>   
</template>

<script lang="ts" setup>
const fondoPath = "url('/assets/waves.svg')";
</script>

<style lang="scss" scoped>
    .container{
        height: 100vh;
        display: grid;
        place-content: center;
        position: relative;
        z-index: 100;
        width: 94vw;
        border-top: 0px;
        border-bottom: 0px;
        margin: 0 3vw;
    }
    .container::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;  
    opacity: .4; 
    z-index: -1;
    background: var(--fondo-path);
    background-size: cover;
    }
    h1{
        font-size: 3em;
        margin: 0;
        font-weight: lighter;
    }
    h2{
        margin: 0;
        font-size: 2.5em;
        color: $color-oscuro;
    }
    p,h2,h1{
        z-index: 100;
    }
</style>