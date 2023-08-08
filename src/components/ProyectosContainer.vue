<template>
<div class="main-container">
    <h2 class="titulo">Proyectos Destacados</h2>
    <div class="container">
        <div class="proyecto">
            <img class="imagen" src='/assets/comunidad-fiuba.png' loading="lazy"/>
            <div class="descripcion">
                <p>Mas de 1000 usuarios en esta pagina web dedicada a los estudiantes de la FIUBA</p>
                <span>
                    <v-icon class="icono" scale="2" name="co-react"/>
                    <v-icon class="icono" scale="2" name="bi-plus"/>
                    <v-icon class="icono" scale="2" name="co-laravel"/>
                </span>
            </div>
        </div>
        <div class="proyecto">
            <img class="imagen" src='/assets/control-camaras.png' loading="lazy"/>
            <div class="descripcion">
                <p>Capacidad para monitorear el estado de mas de 50.000 camaras</p>
                <span>
                    <v-icon class="icono" scale="2" name="co-java"/>
                    <v-icon class="icono" scale="2" name="bi-plus"/>
                    <v-icon class="icono" scale="2" name="co-javascript"/>
                </span>
            </div>
        </div>
        <div class="proyecto">
            <img class="imagen" src='/assets/juegos.png' loading="lazy"/>
            <div class="descripcion">
                <p>Varios videojuegos</p>
                <span><v-icon class="icono" scale="2" name="co-python"/></span>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'
const router = useRouter()
const doNavigate = (to:string) =>{
    router.push(to)
}
onMounted(() => {
    const proyectos = document.querySelectorAll("div[class='proyecto']");
    const height = window.screen.height;
    let actual:Element | null = null;
    let actualDiff:number | null = null;
    for(let i=0; i<3;i++){
        const element = proyectos[i];
        document.addEventListener('scroll',() =>{
            const rect = element.getBoundingClientRect()
            const top =rect.top
            const bottom = rect.bottom
            const mid = (top + bottom)/2
            const diffMid = Math.abs(height/2 - mid);
            if(mid>0 && mid<height-50 && (!actual || (diffMid<=actualDiff || actual==element))){
                element.classList.add("higlighted")
                actual = element;
                actualDiff=diffMid
            }else{
                element.classList.remove("higlighted")
                if(actual == element){
                    actual = null
                    actualDiff = null
                }
            }
        })
    }
})
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill,94vw);
    place-content: center;
    gap: 2em;
}

.proyecto {
    width: 94vw;
    background-color: lighten($color-fondo,3%);
    aspect-ratio: 16/9;
    transition: box-shadow 0.5s ease-in-out;
    opacity: 0.85;
}

.imagen {
    width: 94vw;
    display: block;
    aspect-ratio: 16/9;
    transition: opacity 0.5s;
}
.descripcion{
    padding: 0.5rem;
}
.higlighted{
    opacity: 1;
    box-shadow: 0 0 20px 0 grey;
}
p{
    font-size: 18px;
    margin: 0;
    margin-bottom: 0.2rem;
}
.main-container{
    z-index: 100;
    position: relative;
    width: 94vw;
    border: 1vw solid transparent;
    border-top: 0px;
    border-bottom: 0px;
    margin: 0 2vw;
}
.titulo{
    font-size: 2em;
    border-left: 0;
    padding: 1.5em 0;
    color: $color-oscuro;
    font-family: 'Lucida Sans';
    margin: 0;
}
</style>
