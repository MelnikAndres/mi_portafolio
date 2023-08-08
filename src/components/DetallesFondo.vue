<template>
    <div id="rayas" class="rayas">
    </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';
onMounted(() => {
    const rayas = document.getElementById("rayas")
    document.addEventListener('scroll', event=>{
    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
        document.body.clientHeight;
    var top  = window.pageYOffset || document.documentElement.scrollTop
    var actual = top/limit;
    rayas?.style.setProperty('--translate-y',actual*height + "px");
})
})
</script>

<style lang="scss" scoped>
    .rayas{
        top: -90vh;
        left: 0;
        width: 94vw;
        border-image: linear-gradient($color-oscuro,rgba($color-claro,0.1), $color-oscuro) 30;
        border-width: 1vw;
        border-style: solid;
        border-top: 0px;
        border-bottom: 0px;
        margin: 0 2vw;
        height: 200vh;
        position: fixed;
        transform: translate(0,var(--translate-y));
    }
</style>