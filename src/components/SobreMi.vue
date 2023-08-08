<template>
    <div class="container">
        <div class="full-width">
            <h2 class="oscuro">Sobre Mi</h2>
        </div>
        <div class="full-width">
            <p class="descripcion">Enfocado en el <span class="oscuro">front-end</span> y con conocimientos solidos en el back-end,
        un desarrollador <span class="oscuro">apasionado</span> con mucha <span class="oscuro">atención al detalle.</span><br>
        Actualmente soy estudiante de ingeniería informática en la FIUBA,
        donde cree <span class="oscuro">"Comunidad Fiuba"</span> logrando mejorar la cursada
        de más de <span class="oscuro">1000 alumnos.</span> </p>
        </div>
        <div class="contacto-container half-width animated oscuro">
            <v-icon name="md-email-round" class="contacto"></v-icon>
            <span >andres.d.melnik@gmail.com</span>
        </div>
        <div class="contacto-container half-width animated oscuro">
            <v-icon name="co-linkedin" class="contacto"></v-icon>
            <span><a class="oscuro" href="https://www.linkedin.com/in/andres-demian-melnik/" target="_blank">Visitar Linkedin</a></span>
        </div>
        
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .container{
        max-height: 100vh;
        height: 100vh;
        display: flex;
        place-content: center;
        flex-wrap: wrap;
        z-index: 100;
        position: relative;
        overflow: hidden;
    }
    .full-width{
        width: 100%;
    }
    .half-width{
        width: 50%;
        min-width:400px;
    }
    h2{
        font-size: 2em;
        width: 50%;
        text-align: left;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
        margin-bottom: 0;
    }
    .descripcion{
        max-width: 50%;
        text-align: left;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
    }
    .contacto{
        margin-top: 4em;
        width: 50%;
        min-width:400px;
        margin-bottom: 0.2em;
    }
    a{
        margin: 0;
    }
    .contacto-container{
        display: grid;
        place-content: center;
    }
    .oscuro{
        color:$color-oscuro
    }
    .animated{
        animation: click-me 2s ease-in-out 0s infinite alternate-reverse;
    }
    @keyframes click-me {
        0%{
            opacity: 0.8;
        }
        80%{
            opacity: 1;
        }
    }
</style>