<template>
    <nav class="flex items-center justify-between flex-wrap bg-[#27374D] p-6 z-50">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <button class="mr-6" @click="onMenuClick(menuButton)">
                <svg id="navClosed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <span class="font-semibold text-xl tracking-tight">Projects</span>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuButton = ref(true);

const emit = defineEmits(['menuClicked'])

const onMenuClick = (menuStatus) => {
    menuButton.value = !menuStatus

    emit('menuClicked', menuButton)
}
</script>

<style lang="scss" scoped></style>