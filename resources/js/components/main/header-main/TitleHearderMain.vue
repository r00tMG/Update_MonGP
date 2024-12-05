<script setup>
defineProps({
    title:String,
    width:String,
    height:String
})
</script>

<template>
    <div >
        <p class="fontText">
            {{title}}
        </p>
        <div class="bg-success" :style="{height, width}"></div>
    </div>
</template>

<style scoped>
.fontText{
    font-family: Lato,serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 43px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
}

</style>
