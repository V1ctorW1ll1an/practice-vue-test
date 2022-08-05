import { defineStore } from 'pinia';
import numeral from 'numeral';

type State = {
    currency: string;
};
export const useCurrencyStore = defineStore('currencyStore', {
    state: () =>
        ({
            currency: '0,00',
        } as State),
    getters: {
        getCurrency: (state) =>
            numeral(state.currency.replace('.', '').replace(',', '.')).value(),
    },
    actions: {},
});
