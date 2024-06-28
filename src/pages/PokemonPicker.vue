<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-2">
            <!-- <div class="col-span-12 md:col-span-6 lg:col-span-4 p-2">
                <div class="bg-white border rounded-md">
                    <div v-if="selectedPokemon.pokemon">
                        <div class="flex justify-center border-b bg-slate-300 rounded-t-md">
                            <img class="rounded-t-md w-60 h-60"
                                :src="selectedPokemon.pokemon.sprites.front_default"
                                :alt="`${selectedPokemon.pokemon.name}-front`" />
                        </div>
                        <div class="p-4">
                            <h5 class="text-lg font-semibold tracking-tight text-gray-900 capitalize">{{
                                selectedPokemon.pokemon.name }}
                            </h5>
                            <div>
                                <span v-for="(type, idx) in selectedPokemon.pokemon.types" :key="idx"
                                    class="inline-flex items-center justify-center px-1 py-1 text-xs capitalize font-medium text-center bg-slate-700 text-white rounded-md min-w-[50px]"
                                    :class="idx > 0 ? 'ml-2' : ''">
                                    {{ type.type.name }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else class="flex items-center justify-center h-60">
                        <img class="w-20 h-20" :src="PokeballIcon" alt="pokeball">
                    </div>
                </div>
            </div> -->
            <div class="col-span-12 md:col-span-6 lg:col-span-8 p-2">
                <div class="px-6 py-6 lg:px-8 bg-white rounded-md border">
                    <div>
                        <h2 class="text-lg font-semibold leading-7 text-gray-900">Pokemon Picker</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Find your favorite pokemons</p>
                    </div>
                    <div class="mt-2">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input v-model="text" type="text" name="pokemon" id="pokemon"
                                    class="block w-full rounded-md border-0 px-3 py-1.5 ps-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div> 
                    </div>
                    <hr class="my-4" />
                    <div>
                        <h2 class="text-sm font-semibold leading-7 text-gray-900 mb-2">Pokemon list</h2>
                        <div v-if="text" class="flex justify-start flex-wrap gap-2">
                            <button v-for="(pokemon, idx) in filteredPokemons" :key="idx"
                                class="flex justify-between gap-x-6 py-1 px-2 border rounded-md bg-slate-100" @click="viewPokemon(pokemon.name)">
                                <div class="flex min-w-0 gap-x-4">
                                    <div class="min-w-0 flex-auto">
                                        <p class="text-sm font-semibold leading-6 capitalize">{{ pokemon.name
                                        }}</p>
                                    </div>
                                </div>
                                <div class="shrink-0 flex flex-col items-end">
                                    <img class="h-6 w-6 flex-none rounded-full " :src="PokeballIcon"
                                        alt="pokeball-icon" />
                                </div>
                            </button>
                        </div>

                        <div class="mt-2" v-else>
                            <p class="italic text-sm leading-6 text-gray-600">No data found..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-20" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <img :src="PokeballIcon" alt="pokeball-icon">
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">


                    <!---   Template -->
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900 capitalize">{{ selectedPokemon.pokemon ? selectedPokemon.pokemon.name : "Pokemon" }}</DialogTitle>
                    <div class="mt-2">
                        <div v-if="selectedPokemon.pokemon">
                            <div class="flex justify-center">
                                <img class="w-60 h-60"
                                    :src="selectedPokemon.pokemon.sprites.front_default"
                                    :alt="`${selectedPokemon.pokemon.name}-front`" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-lg font-semibold tracking-tight text-gray-900 capitalize">{{
                                    selectedPokemon.pokemon.name }}
                                </h5>
                                <div>
                                    <span v-for="(type, idx) in selectedPokemon.pokemon.types" :key="idx"
                                        class="inline-flex items-center justify-center px-1 py-1 text-xs capitalize font-medium text-center bg-slate-700 text-white rounded-md min-w-[50px]"
                                        :class="idx > 0 ? 'ml-2' : ''">
                                        {{ type.type.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div v-else class="flex items-center justify-center h-60">
                            <h6>Do something!..</h6>
                        </div>
                    </div>
                    <!---   End of Template -->

                    
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="closeDialog" ref="cancelButtonRef">Close</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { reactive, toRefs, computed, ref } from 'vue';
import PokeballIcon from "@/assets/svgs/pokeball-pokemon.svg"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const state = reactive({
    pokemons: [],
    urlIdLookup: {},
    text: "",
    filteredPokemons: computed(() => updatePokemon())
})

const { pokemons, urlIdLookup, text, filteredPokemons } = toRefs(state)

const open = ref(false);

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
                selectedPokemon.pokemon = data
            })
        open.value = true;
    }
}

function closeDialog() {
    selectedPokemon.pokemon = null;
    open.value = false;
}

fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0")
    .then((res) => res.json())
    .then((data) => {
        state.pokemons = data.results
        state.urlIdLookup = data.results
            .reduce((acc, cur, idx) =>
                acc = { ...acc, [cur.name]: idx + 1 }
                , {})
    })

</script>

<style lang="scss" scoped></style>