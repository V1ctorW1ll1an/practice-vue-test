/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        setupFiles: ['src/setupTests.ts'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/_index.scss";',
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
