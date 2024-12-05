<script setup>

</script>

<template>
    <div class="container-fluid px-0">
        <header class="">
            <div>
                <div class="containerCorde rounded-circle">
                </div>
                <slot name="header"></slot>
            </div>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
.containerCorde{
    position: absolute;
    width: 896px;
    height: 896px;
    top: -65px;
    left: -404px;
    border-top: 0;
    border-right: 1px solid rgba(38, 39, 59, 0.5);
    border-bottom: 0;
    border-left: 0;

    z-index: -1;



}

</style>
