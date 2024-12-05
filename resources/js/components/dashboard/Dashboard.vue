<script setup>

import LayoutDashboard from "./LayoutDashboard.vue";
import Sidebar from "./sidebar/Sidebar.vue";
import HeaderDashboard from "./header/Header-Dashboard.vue";

</script>

<template>
    <LayoutDashboard>
        <template #aside>
            <Sidebar/>
        </template>
        <template #header>
            <header-dashboard/>
        </template>
        <template #main>
            main
        </template>
        <template #footer>
            footer
        </template>
    </LayoutDashboard>
</template>

<style scoped>

</style>
