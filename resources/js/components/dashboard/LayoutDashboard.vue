<script setup>

</script>

<template>
    <div class="container-fluid px-0">
        <div class="row">
            <div class="col-sm-3 bg-primary">
                <slot name="aside"></slot>
            </div>
            <div class="col-sm-9 bg-success">
                <header class="bg-light">
                    <slot name="header"></slot>
                </header>
                <main class="bg-warning">
                    <slot name="main"></slot>
                </main>
                <footer class="bg-dark">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </div>
</template>

<style scoped>

@media (min-width: 576px) {
    .col-sm-3 {
        flex: 0 0 auto;
        width: 20% !important;
    }
    .col-sm-9 {
        flex: 0 0 auto;
        width: 80% !important;
    }
}
</style>
