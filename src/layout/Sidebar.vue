<template>
    <div class="relative flex min-h-screen">

        <!-- Main Content -->
        <div class="flex-container">
            <header>
                <div class="bg-white shadow px-4 py-4 text flex items-center">

                    <button @click="showSidebar = !showSidebar" class="text-cyan-600 font-extrabold ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </button>


                    <span class="ml-4 md:ml-2 text-cyan-600 font-bold ">Header</span>

                </div>
            </header>

            <section class="content">
                <h4>Content</h4>
                <h5>
                    show sidebar: {{ showSidebar }}
                </h5>

            </section>

            <footer>
                <h4>
                    Footer
                </h4>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const showSidebar = ref(false);

if (window.innerWidth > 768) {
    showSidebar.value = true
    console.log(showSidebar.value)
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

footer {
    background-color: #FFC107;
    color: #333;
}
</style>