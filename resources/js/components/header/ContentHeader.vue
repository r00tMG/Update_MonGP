<script setup>
import {onMounted} from "vue";
onMounted(()=>{

    const container = document.querySelector('div.container')
    window.addEventListener('load',()=>{
        container.classList.add('load')
    })


})

</script>

<template class="flex content-center justify-center h-full items-center">
    <div class="container">
        <p>
            <span class="text-success">Publiez</span> vos annonces,
            <span class="text-success">Gérez</span> les réservations
            grâce à <em class="text-success">MonGP</em>
        </p>
    </div>
    <slot></slot>
</template>

<style scoped>
div.container{
    width: 676px;
    height: 144px;
    position: relative;
    top: 200px;
}
div p{
    font-family: Lato,serif;
    gap: 20px;
    font-size: 30px;
    font-weight: 600;
    line-height: 46px;
    text-align: center;
    text-decoration-skip-ink: none;
}
.load{
    transform: translateY(-70px);
    opacity: 1;
    transition: transform 6s ease-out, opacity 2s ease-out;
}


@media (max-width: 800px) {
    div.container{
        margin-left: 337px !important;
    }
}
</style>


