import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
                'app/Livewire/**',
            ],
        }),
    ],
    build: { chunkSizeWarningLimit: 1600,},
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('/resources/js/scr/', import.meta.url))
        }
    }
});
