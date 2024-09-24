import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/~khaic/S2024/microfrontend/store/',  // Adjusted base path
  plugins: [
    react(),
    federation({
      name: 'mediastore',
      filename: 'remoteEntry.js',
      exposes: {
        './contextHooks': './src/hooks/contextHooks',
        './MediaContext': './src/contexts/MediaContext',
        './UserContext': './src/contexts/UserContext',
        './apiHooks': './src/hooks/apiHooks',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3001, // Set the desired port here
  },
  preview: {
    port: 3001, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});