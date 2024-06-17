<template>
    <div class="relative flex min-h-screen">
        <AppSidebar :sidebarStatus="sidebarMenuStatus" />
        <!-- Main Content -->
        <div class="flex-container bg-slate-100">

            <AppHeader @menuClicked="handleMenuClicked" />

            <section class="content p-4">
                <router-view></router-view>
            </section>

            <AppFooter />
        </div>
    </div>
</template>

<script setup>
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppFooter from './AppFooter.vue'

import Sidebar from './Sidebar.vue'

import { ref, computed } from 'vue'

const menuStatus = ref(false);

const handleMenuClicked = (headerStatus) => {
    console.log('menu-status: ', headerStatus.value)
    menuStatus.value = headerStatus.value
}

// Pass menuStatus to sidebar
const sidebarMenuStatus = computed(() => {
    return menuStatus.value
})

if (window.innerWidth > 768) {
    menuStatus.value = true
    console.log("menu-status: ", menuStatus.value)
}

</script>

<style lang="scss" scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1 1 0%;
}

section.content {
    flex: 1;
}
</style>
