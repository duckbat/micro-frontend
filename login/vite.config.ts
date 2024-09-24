import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  base: '/~khaic/S2024/microfrontend/login/',  // Adjusted base path
  plugins: [
    react(),
    federation ({
      name: 'login',
      filename: 'remoteEntry.js',
      remotes: {
        mediastore: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/store/assets/remoteEntry.js',
        front_and_sidebar: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/front-and-sidebar/assets/remoteEntry.js',
      },
      exposes: {
        './Login': './src/components/LoginForm',
        './Register': './src/components/RegisterForm',
        './FormSwitch': './src/components/FormSwitch',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3004,
  },
  preview: {
    port: 3004,
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