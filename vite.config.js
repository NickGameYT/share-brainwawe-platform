import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: '0.0.0.0', // Доступ по всем IP (белый IP тоже будет работать)
    port: 80, // Можете поменять порт, если нужно
  }
});
