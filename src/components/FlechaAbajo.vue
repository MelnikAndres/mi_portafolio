<template>
<div @click="scrollMe" ref="flechaRef" class="flecha disabled">
    <svg viewBox="0 0 24 24" width="96px" height="96px">
         <path d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z"/></svg>
</div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from 'vue';
const flechaRef = ref(null)
const scrollMe = () =>{
    const height= window.innerHeight|| document.documentElement.clientHeight|| 
        document.body.clientHeight
    window.scrollTo({top: height, behavior: 'smooth'});
}
onMounted(() => {
    const flecha = flechaRef.value
    setTimeout(() => {
        var top  = window.pageYOffset || document.documentElement.scrollTop
        if(flecha && top<80){
            flecha.classList.remove("disabled")
        }
    }, 3000);
    document.addEventListener('scroll', event=>{
    var top  = window.pageYOffset || document.documentElement.scrollTop
    console.log(top)
    if(!flecha){
        return
    }
    if(top>80){
        flecha.classList.add("disabled")
    }else{
        flecha.classList.remove("disabled")
    }
})
})
</script>

<style lang="scss" scoped>
     .flecha{
        fill: $color-texto;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0);
        position: fixed;
        opacity: 0.8;
        animation: go 2s ease-in-out 1s infinite;
        cursor: pointer !important;
        z-index: 200;
    }
    .disabled{
        opacity: 0 !important;
        visibility: hidden;
    }
    @keyframes go {
        0%{
            transform: translate(-50%,0);
            opacity: 0.8;
        }
        100%{
            transform: translate(-50%,50%);
            opacity: 0;
        }
    }
</style>