<script setup lang="ts">
import MyPokemon from './MyPokemon.vue';
import { ref } from 'vue';

type Pokemon = {
    name: string;
    type: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    moves: string[];
};

const pokemonList = ref<Pokemon[]>([]);

async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    console.log(data);
    pokemonList.value = data.results;
}
</script>
<template>
    <div>
        <button data-testid="GetPokemon" @click="getPokemon()">
            Get pokemon
        </button>
        <div v-for="(pokemon, idx) in pokemonList" :key="idx">
            <h2>{{ pokemon.name }}</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
