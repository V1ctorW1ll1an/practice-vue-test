import Counter from '@/components/examples/Counter.vue';
import { render, screen, fireEvent } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Counter.vue', () => {
    it('User should see a number', async () => {
        render(Counter);
        const element = screen.getByTestId('_counter');

        expect(element).toHaveTextContent('0');
    });
    it('Should increment counter', async () => {
        render(Counter);
        const element = screen.getByTestId('_counter');
        const button = screen.getByTestId('_incrementButton');

        expect(element.textContent).toBe('0');

        await fireEvent.click(button);
        expect(element.textContent).toBe('1');
    });
    it('Should decrement counter', async () => {
        render(Counter);
        const element = screen.getByTestId('_counter');
        const button = screen.getByTestId('_decrementButton');

        expect(element.textContent).toBe('0');

        await fireEvent.click(button);
        expect(element.textContent).toBe('-1');
    });
});
