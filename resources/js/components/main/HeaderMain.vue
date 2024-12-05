<script setup>
defineProps({
    position:String,
    top:String,
    left:String,
    zIndex:String,
})
</script>

<template>
    <div >
        <slot name="title-header"></slot>
        <div class="">
            <slot name="div"></slot>
        </div>
    </div>
</template>

<style scoped>


.contenu{
    width: 192px;
    height: 204px;
}


</style>
