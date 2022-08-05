import { render, screen, fireEvent } from '@testing-library/vue';
import { describe, it, expect, beforeEach } from 'vitest';
import MyPokemon from '@/components/MyPokemon.vue';
import { setActivePinia, createPinia } from 'pinia';

const piniaInstance = createPinia();

describe('MyPokemon', () => {
    beforeEach(() => {
        setActivePinia(piniaInstance);
    });
    it('Should render element correctly', async () => {
        render(MyPokemon, {
            global: {
                plugins: [piniaInstance],
            },
        });
        const [buttonId, pokemonName] = ['GetPokemon', 'bulbasaur'];
        const sut = screen.getByTestId(buttonId);

        await fireEvent.click(sut);
        const value = await screen.findByText(pokemonName);

        expect(value.textContent).toBe(pokemonName);
    });
});
