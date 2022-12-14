import { beforeAll, afterEach, afterAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockPokemon } from './components/__tests__/mocks/mockPokemon';
import 'whatwg-fetch';

export const restHandlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockPokemon));
    }),
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
