<template>
    <div>
        <h1>Dashboard</h1>
        <span>{{ $route.params.id }}</span>
    </div>


    <div v-if="pokemon" class="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
        <h3 class="text-2xl text-green-900 uppercase">{{ pokemon.name }}</h3>
        <div class="flex justify-center">
            <img class="w-48" :src="pokemon.sprites.front_shiny" alt="">

            <img class="w-48" :src="pokemon.sprites.back_shiny" alt="">
        </div>
        <h3 class="text-yellow-400">Types</h3>
        <div v-for="(type, idx) in pokemon.types" :key="idx">
            <h5 class="text-blue-900">{{ type.type.name }}</h5>
        </div>
    </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();

const state = reactive({
    pokemon: null
})

const { pokemon } = toRefs(state)

fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        state.pokemon = data
    })

</script>

<style lang="scss" scoped></style>