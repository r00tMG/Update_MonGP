<script setup>
defineProps({
    position:String,
    top:String,
    left:String,
    zIndex:String
})
</script>

<template>
    <div class="rounded-circle size shadow bg-white " :style="{position, top, left, zIndex}">
        <slot name="svgindiv"></slot>
    </div>
</template>

<style scoped>
.size{
    width: 150px;
    height: 150px;
}
</style>
