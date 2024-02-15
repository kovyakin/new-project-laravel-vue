import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: { chunkSizeWarningLimit: 1600, },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js/src', import.meta.url))
        }
    }
});
