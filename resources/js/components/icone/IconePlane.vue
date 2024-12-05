<script setup>
const props = defineProps({
    top:String,
    left:String,
    zIndex:String
})
//console.log(props.top, props.left)
</script>

<template>
    <div class="rounded-circle contentIcon bg-white" :style="{top, left, zIndex}">
        <svg stroke="currentColor" class="text-success positionIcon"   fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="3.1em" width="3.1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z">
            </path>
        </svg>
    </div>
</template>

<style scoped>
.contentIcon{
    position: absolute;
    width: 60px;
    height: 60px;
    top: 700px;
    left: 296px;
    box-shadow: 0px 0px 10px 1px #eaeaea;
    animation: mymove 5s infinite;
}
@keyframes mymove {
    100% {transform: rotate(360deg);}
}

.positionIcon{
    position:absolute;
    width: 26px;
    height: 19px;
    top: 19px;
    left: 17px;
}




</style>
