<template>
    <div class="relative flex min-h-screen">
        <!-- Sidebar -->
        <div
        class="
            bg-cyan-600
            text-cyan-100
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
            "
        :class="showSidebar ? 'relative translate-x-0': 'static -translate-x-0'"
       >
        
        <!--  :class="{'relative translate-x-0': showSidebar}" -->

        <!-- absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full -->

            <a href="" class="flex items-center space-x-2 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
                <span class="text-2xl font-extrabold text-white">Sidebar</span>
            </a>
            <nav>
                <a href="/" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Dashboard</span>
                </a>
                <a href="/" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Users</span>
                </a>
                <a href="/" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Team</span>
                </a>
                <a href="/" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Project</span>
                </a>
            </nav>
        </div>
        <!-- Main Content -->
        <!-- <div class="flex-1">
            
            <div class="bg-white shadow px-4 py-4 text flex items-center">
                
                <button @click="showSidebar = !showSidebar" class="text-cyan-600 font-extrabold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
                </button>


                <span class="ml-4 text-cyan-600 font-bold ">Header</span>
            
            </div>
            <div class="p-8 text-cyan-700 font-extrabold ">Content</div>
        </div> -->
        <div class="flex-container">
            <header>
                <div class="bg-white shadow px-4 py-4 text flex items-center">
                
                <button @click="showSidebar = !showSidebar" class="text-cyan-600 font-extrabold ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
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