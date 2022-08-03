<script setup lang="ts">
import { useDefaultStore } from '@/stores/index.js';
import { storeToRefs } from 'pinia';

const store = useDefaultStore();
const { pokemonList } = storeToRefs(store);
const { getPokemon } = store;
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
