import { describe, it, expect, beforeEach } from 'vitest';
import CurrencyInput from '@/components/CurrencyInput.vue';
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
});
