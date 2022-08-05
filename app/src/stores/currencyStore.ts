import { defineStore } from 'pinia';
import numeral from 'numeral';

type State = {
    currency: string;
    dailyCurrency: string;
    days: number;
};
export const useCurrencyStore = defineStore('currencyStore', {
    state: () =>
        ({
            currency: '0,00',
            dailyCurrency: '0,00',
            days: 7,
        } as State),
    getters: {
        getCurrency: (state) =>
            // convert currency to number
            Number(state.currency.replace('.', '').replace(',', '.')),
    },
    actions: {
        /**
         * DailyCurrency is the currency divided by the days with two decimals places
         */
        calcDailyCurrency() {
            const regex = /^\d{1,3}(\.\d{3})*(,\d{1,2})?$/;
            const isCurrency = regex.test(this.currency);

            if (!this.getCurrency || !isCurrency) {
                this.dailyCurrency = '0,00';
                return;
            }
            this.dailyCurrency = `${(this.getCurrency / this.days).toFixed(
                2
            )}`.replace('.', ',');
        },
    },
});
