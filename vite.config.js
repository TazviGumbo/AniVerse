import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/AniVerse/', // Replace with your repository name
  server: {
    port: 5173, // Default port for Vite
    open: true, // Automatically open the browser
  },
});
