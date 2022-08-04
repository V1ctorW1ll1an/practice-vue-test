import { render, fireEvent, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import Input from '@/components/Input.vue';
import '@testing-library/jest-dom';

describe('Input', () => {
    it('Should render error message', async () => {
        render(Input);
        const usernameInput = screen.getByLabelText(/username/i);

        await fireEvent.update(usernameInput, '');

        expect(screen.queryByText('username is required')).toBeInTheDocument();
    });

    it('Should hide error', async () => {
        render(Input);
        const usernameInput = screen.getByLabelText(/username/i);

        await fireEvent.update(usernameInput, 'Victor');

        expect(
            screen.queryByText('username is required')
        ).not.toBeInTheDocument();
    });
});
