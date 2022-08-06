import { describe, it, expect, beforeEach } from 'vitest';
import CurrencyInput from '@/components/examples/CurrencyInput.vue';
import { render, screen, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';
import { createPinia, setActivePinia, storeToRefs } from 'pinia';
import { useCurrencyStore } from '@/stores/currencyStore';

const piniaInstance = createPinia();

describe('CurrencyInput', () => {
    beforeEach(() => {
        setActivePinia(piniaInstance);
    });
    it('Currency initial value should be 0,00', () => {
        const store = useCurrencyStore();
        const { currency } = storeToRefs(store);
        expect(currency.value).toBe('0,00');
    });
    it('Should store correctly', async () => {
        const store = useCurrencyStore();
        const { currency, getCurrency } = storeToRefs(store);
        render(CurrencyInput, {
            global: {
                plugins: [piniaInstance],
            },
        });
        const input = screen.getByTestId('_currency');

        await fireEvent.update(input, '100,00');

        expect(currency.value).toBe('100,00');
        expect(getCurrency.value).toBe(100);
    });
    it('Should render with decimal places', async () => {
        const store = useCurrencyStore();
        const { currency, getCurrency } = storeToRefs(store);
        render(CurrencyInput, {
            global: {
                plugins: [piniaInstance],
            },
        });
        const input = screen.getByTestId('_currency');

        await fireEvent.update(input, '123,23');

        expect(currency.value).toBe('123,23');
        expect(getCurrency.value).toBe(123.23);
    });
    it('Should remove left zeros from getCurrency', async () => {
        const store = useCurrencyStore();
        const { getCurrency } = storeToRefs(store);
        render(CurrencyInput, {
            global: {
                plugins: [piniaInstance],
            },
        });
        const currency = screen.getByTestId('_currency');

        await fireEvent.update(currency, '00000,23');
        expect(getCurrency.value).toBe(0.23);

        await fireEvent.update(currency, '00000,00');
        expect(getCurrency.value).toBe(0);

        await fireEvent.update(currency, '01010,01');
        expect(getCurrency.value).toBe(1010.01);
    });
    it('daily Currency is zero when currency is falsy', async () => {
        render(CurrencyInput, {
            global: {
                plugins: [piniaInstance],
            },
        });

        const currency = screen.getByTestId('_currency');
        const dailyCurrency = screen.getByTestId(
            '_dailyCurrency'
        ) as HTMLInputElement;

        await fireEvent.update(currency, '');

        expect(dailyCurrency.value).toBe('0,00');

        await fireEvent.update(currency, '0');

        expect(dailyCurrency.value).toBe('0,00');

        await fireEvent.update(currency, undefined);

        expect(dailyCurrency.value).toBe('0,00');

        await fireEvent.update(currency, 'abc');

        expect(dailyCurrency.value).toBe('0,00');
    });
    it('The daily currency should be the total currency divided by the days', async () => {
        render(CurrencyInput, {
            global: {
                plugins: [piniaInstance],
            },
        });

        const currency = screen.getByTestId('_currency');
        const days = screen.getByTestId('_days');
        const dailyCurrency = screen.getByTestId(
            '_dailyCurrency'
        ) as HTMLInputElement;

        await fireEvent.update(days, '7');
        await fireEvent.update(currency, '700,00');

        expect(dailyCurrency.value).toBe('100,00');

        await fireEvent.update(days, '10');
        await fireEvent.update(currency, '500,00');

        expect(dailyCurrency.value).toBe('50,00');
    });
    it('should remove left zeros from currency', async () => {
        const store = useCurrencyStore();
        const { getDailyCurrency } = storeToRefs(store);
        render(CurrencyInput, {
            global: {
                plugins: [piniaInstance],
            },
        });
        const dailyCurrency = screen.getByTestId('_dailyCurrency');

        await fireEvent.update(dailyCurrency, '00000,23');
        expect(getDailyCurrency.value).toBe(0.23);

        await fireEvent.update(dailyCurrency, '00000,00');
        expect(getDailyCurrency.value).toBe(0);

        await fireEvent.update(dailyCurrency, '01010,01');
        expect(getDailyCurrency.value).toBe(1010.01);
    });
    it('currency is zero when daily currency is falsy', async () => {
        render(CurrencyInput, {
            global: {
                plugins: [piniaInstance],
            },
        });

        const currency = screen.getByTestId('_currency') as HTMLInputElement;
        const dailyCurrency = screen.getByTestId('_dailyCurrency');

        await fireEvent.update(dailyCurrency, '');

        expect(currency.value).toBe('0,00');

        await fireEvent.update(dailyCurrency, '0');

        expect(currency.value).toBe('0,00');

        await fireEvent.update(dailyCurrency, undefined);

        expect(currency.value).toBe('0,00');

        await fireEvent.update(dailyCurrency, 'abc');

        expect(currency.value).toBe('0,00');
    });
});
