<script setup>
import seConnecter from '../../assets/icones/se-connecter.png'
</script>

<template>
    <div class="position">
        <slot name="headerModeOperatoire"></slot>
        <div class="container">
            <div class="row w-75 my-5 m-auto flex align-items-center justify-content-between">
                <div class="col-md-4">
                    <p class="">
                        <span class="step-number me-1">1</span><span class="text-success fs-3">Connect</span>
                    </p>
                    <p class="pe-2">
                        Vous voulez trouver un GP ou publier une annonce ? La première étape consiste à vous connecter à MonGP.
                    </p>
                </div>
                <div class="col-md-3">
                    <img :src="seConnecter" alt="Se connecter">
                </div>
            </div>
            <div class="row w-75 my-5 m-auto flex align-items-center justify-content-between">
                <div class="col-md-3">
                    <img :src="seConnecter" alt="Se connecter">
                </div>
                <div class="col-md-4">
                    <p class="">
                        <span class="step-number me-3">2</span><span class="text-success fs-3">Store</span>
                    </p>
                    <p class="pe-2">
                        Ensuite, vous pouvez rechercher l'annonce qui vous correspond ou publier la vôtre.
                    </p>
                </div>
            </div>
            <div class="row w-75 my-5 m-auto flex align-items-center justify-content-between">
                <div class="col-md-4">
                    <p class="">
                        <span class="step-number me-3">3</span><span class="text-success fs-3">Connect</span>
                    </p>
                    <p class="pe-2">
                        Nous préparons, expédions toutes les commandes faites directement depuis notre plateforme selon la date d'arrivée.
                    </p>
                </div>
                <div class="col-md-3">
                    <img :src="seConnecter" alt="Se connecter">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.position {
    position: absolute;
    width: 1246px;
    height: 1328px;
    top: 852px;
    left: 150px;
}
.step-number {
    background-color: #337447;
    color: white;
    font-size: 2rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
</style>
