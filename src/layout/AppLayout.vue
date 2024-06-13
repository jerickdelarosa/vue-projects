<template>
    <div class="layout-wrapper">
        <AppHeader @menuClicked="handleMenuClicked" />
        <div class="layout-sidebar">
            <AppSidebar :sidebarStatus="sidebarMenuStatus" />
        </div>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <app-footer></app-footer>
        </div>
    </div>

</template>

<script setup>
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppFooter from './AppFooter.vue'

import { ref, computed } from 'vue'

const menuStatus = ref(true);

const handleMenuClicked = (headerStatus) => {
    console.log('menu-status: ', headerStatus.value)
    menuStatus.value = headerStatus.value
}

// Pass menuStatus to sidebar
const sidebarMenuStatus = computed(() => {
    return menuStatus.value
})

</script>
