<template>
    <!-- Sidebar -->
    <aside class="
            bg-[#41B883]
            text-slate-100
            w-64
            space-y-6
            px-2
            py-4
            transition
            duration-200
            ease-in-out
            absolute
            inset-y-0
            left-0
            transform
            -translate-x-full
            " :class="sidebarStatus ? 'md:relative translate-x-0' : 'static -translate-x-0'">

        <span class="flex items-center justify-between space-x-4 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
            <button @click="onCloseClick(closeButton)" v-show="width < 768">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </span>
        <ul>
            <li>
                <a href="/"
                class="group flex items-center space-x-4 py-3 px-4 hover:bg-[#38a172] rounded hover:text-white transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="text-slate-100 group-hover:text-white font-semibold">Dashboard</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useWindowSize } from '@/composables/useWindowSize';

const closeButton = ref(false);

const {width, height} = useWindowSize();

const props = defineProps({
    sidebarStatus: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['closeClicked'])

const onCloseClick = () => {
    closeButton.value = true
    emit('closeClicked', closeButton)
}

</script>