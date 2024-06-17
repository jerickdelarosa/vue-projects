<template>
    <header>
        <div class="bg-[#27374D] shadow px-4 py-4 flex items-center">

            <button @click="onMenuClick(menuButton)" class="text-white font-extrabold ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </button>


            <span class="ml-4 md:ml-2 text-white font-bold ">Header</span>

        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const menuButton = ref(false);

const emit = defineEmits(['menuClicked'])

const onMenuClick = (menuStatus) => {
    menuButton.value = !menuStatus

    emit('menuClicked', menuButton)
}

if (window.innerWidth > 768) {
    menuButton.value = true
    console.log("menu-button: ", menuButton.value)
}
</script>

<style lang="scss" scoped></style>