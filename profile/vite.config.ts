import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/~khaic/S2024/microfrontend/profile/',  // Adjusted base path
  plugins: [
    react(),
    federation ({
      name: 'profile',
      filename: 'remoteEntry.js',
      remotes: {
        mediastore: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/store/assets/remoteEntry.js',
        front_and_sidebar: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/front-and-sidebar/assets/remoteEntry.js',
        login: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/login/assets/remoteEntry.js',
      },
      exposes: {
        './user': './src/components/user/UserInfo',
        './deleteMedia': './src/components/user/DeleteMedia',
        './modifyMedia': './src/components/user/ModifyMedia',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
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