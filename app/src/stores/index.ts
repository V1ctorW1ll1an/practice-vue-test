import { defineStore } from 'pinia';
type Pokemon = {
    name: string;
    type: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    moves: string[];
};
type State = {
    pokemonList: Pokemon[];
};
export const useDefaultStore = defineStore({
    id: 'defaultStore',
    state: () =>
        ({
            pokemonList: [],
        } as State),
    getters: {},
    actions: {
        async getPokemon() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const data = await response.json();
            console.log(data);
            this.pokemonList = data.results;
        },
    },
});
