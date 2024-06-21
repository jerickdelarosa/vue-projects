<template>
    <div class="p-14">
        <div class="flex justify-center text-4xl text-yellow-700">
            Pokemon Picker
        </div>
        <div class="w-full flex justify-center">
            <input class="mt-10 p-2 border-blue-500 border-2" type="text" placeholder="Enter Pokemon here" v-model="text" />
        </div>
        <div class="mt-10 p-4 flex flex-wrap justify-center">
            <div class="ml-4 text-2xl text-blue-500" v-for="(pokemon, idx) in filteredPokemons" :key="idx">
                {{ pokemon.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive,toRefs, computed } from 'vue';

const state = reactive({
    pokemons: [],
    urlIdLookup: {},
    text: "",
    filteredPokemons: computed(() => updatePokemon())
})

const { pokemons, urlIdLookup } = toRefs(state)

const updatePokemon = () => {
    if (!state.text) {
        return []
    }

    return state.pokemon.filter((pokemon) => {
        pokemon.name.includes(state.text)
    })
}

fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    state.pokemons = data.results
    state.urlIdLookup = data.results
        .reduce((acc, cur, idx) =>
            acc = {...acc, [cur.name]:idx+1}
        ,{})
    })

</script>

<style lang="scss" scoped>

</style>