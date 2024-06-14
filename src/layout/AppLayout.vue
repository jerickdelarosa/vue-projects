<template>
    <!-- <div class="layout-wrapper">
        <AppHeader @menuClicked="handleMenuClicked" />
        <AppSidebar :sidebarStatus="sidebarMenuStatus" />
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <app-footer></app-footer>
        </div>
    </div> -->

    <Sidebar />
</template>

<script setup>
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppFooter from './AppFooter.vue'

import Sidebar from './Sidebar.vue'

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
