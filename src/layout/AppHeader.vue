<template>
    <nav class="flex items-center justify-between flex-wrap bg-[#27374D] p-6 z-50">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <button class="mr-6" @click="onMenuClick(menuButton)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block w-5 h-5 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
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