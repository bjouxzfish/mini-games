import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    // Add this 'base' property
    base: '/mini-games/', // This should match your repo name preceded and followed by slashes
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
        }
    }
});