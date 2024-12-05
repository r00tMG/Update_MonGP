<script setup>
defineProps({
    position:String,
    top:String,
    left:String,
    zIndex:String
})
</script>

<template>
    <div class="bg-white pd-3 size rounded-circle " :style="{position, top, left, zIndex}">
    </div>
</template>

<style scoped>
.size{
    width: 150px;
    height: 150px;
}
.pd-3{
    padding: 1.75rem !important;
    box-shadow:inset #c0c8c1 0 0 60px 0
}
</style>
