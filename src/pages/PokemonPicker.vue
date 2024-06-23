<template>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-6 lg:col-span-4 p-5">
            <div class="px-6 py-6 lg:px-8 bg-white rounded-md border">
                <div class="mb-4">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Pokemon Picker</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">Find your favorite pokemons</p>

                    <label for="first-name" class="mt-4 block text-sm font-medium leading-6 text-gray-900">Pokemon
                        name</label>
                    <div class="mt-1">
                        <input v-model="text" type="text" name="pokemon" id="pokemon"
                            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="border-t border-gray-900/10">
                    <h2 class="mt-2 text-base font-semibold leading-7 text-gray-900">List</h2>
                    <div v-if="text">
                        <ul role="list" class="divide-y divide-gray-200">
                            <li v-for="(pokemon, idx) in filteredPokemons" :key="idx"
                                class="flex justify-between gap-x-6 py-2 cursor-pointer" @click="viewPokemon(pokemon.name)">
                                <div class="flex min-w-0 gap-x-4">
                                    <div class="min-w-0 flex-auto">
                                        <p class="text-sm font-semibold leading-6 text-gray-900 capitalize">{{ pokemon.name
                                        }}</p>
                                    </div>
                                </div>
                                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <img class="h-6 w-6 flex-none rounded-full bg-gray-50" :src="PokeballIcon"
                                        alt="pokeball-icon" />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-1" v-else>
                        <p class="italic text-sm leading-6 text-gray-600">No data found..</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-8 p-5">
            <div class="flex justify-center">
                <div v-if="selectedPokemon.pokemon"
                    class="lg:min-w-[50%] bg-white border border-gray-200 rounded-lg shadow">
                    <div class="flex justify-center border-b">
                        <img class="rounded-t-lg w-full h-[80%] bg-slate-300"
                            :src="selectedPokemon.pokemon.sprites.front_default"
                            :alt="`${selectedPokemon.pokemon.name}-front`" />
                    </div>
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize">{{
                            selectedPokemon.pokemon.name }}
                        </h5>
                        <div>
                            <span v-for="(type, idx) in selectedPokemon.pokemon.types" :key="idx"
                                class="inline-flex items-center justify-center px-1 py-2 text-xs capitalize font-medium text-center bg-slate-700 text-white rounded-md min-w-[75px]"
                                :class="idx > 0 ? 'ml-2' : ''">
                                {{ type.type.name }}
                            </span>
                        </div>
                    </div>
                </div>

                <div v-else class="flex items-center justify-center h-80">
                    <img class="w-40 h-40" :src="PokeballIcon" alt="pokeball">
                </div>

            </div>

        </div>
    </div>

    <!-- <div class="p-14">
        <div class="flex justify-center text-4xl text-yellow-700">
            Pokemon Picker
        </div>
        <div class="mt-10 p-4 flex flex-wrap justify-center">
            <div class=" ml-4 text-2xl text-blue-500" v-for="(pokemon, idx) in filteredPokemons" :key="idx">
                <span class="cursor-pointer" @click="viewPokemon(pokemon.name)">{{ pokemon.name }}</span>
            </div>
        </div>
    </div> -->
</template>

<script setup>
import { reactive, toRefs, computed, ref } from 'vue';
import PokeballIcon from "@/assets/svgs/pokeball-pokemon.svg"

const state = reactive({
    pokemons: [],
    urlIdLookup: {},
    text: "",
    filteredPokemons: computed(() => updatePokemon())
})

const { pokemons, urlIdLookup, text, filteredPokemons } = toRefs(state)

let pokemonId = ref(null);

const selectedPokemon = reactive({
    pokemon: null
});

function updatePokemon() {
    if (!state.text) {
        return []
    }

    return state.pokemons.filter((pokemon) =>
        pokemon.name.includes(state.text)
    )
}

function viewPokemon(pokemonName) {
    console.log(pokemonName)
    if (pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                selectedPokemon.pokemon = data
            })

    }
}

fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        state.pokemons = data.results
        state.urlIdLookup = data.results
            .reduce((acc, cur, idx) =>
                acc = { ...acc, [cur.name]: idx + 1 }
                , {})
    })

</script>

<style lang="scss" scoped></style>