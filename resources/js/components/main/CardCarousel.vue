<script setup>
defineProps({
    title: String,
    body: String,
})
</script>

<template>
    <div class="max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700">
        <div class="rounded-circle shadow p-3 bg-white">
            <slot name="svg"></slot>
        </div>
        <a href="#">
            <h5 class="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{title}}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {{body}}
        </p>
    </div>
</template>

<style scoped>
div .rounded-circle{
    width: 60px;
    height: 60px;
}

</style>
