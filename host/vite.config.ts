import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/~khaic/S2024/microfrontend/host/',  // Correct base path for hosted files
  plugins: [
    react(),
    federation({
      name: 'Video streamer app',
      remotes: {
        mediastore: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/store/assets/remoteEntry.js',
        front_and_sidebar: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/front-and-sidebar/assets/remoteEntry.js',
        profile: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/profile/assets/remoteEntry.js',
        login: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/login/assets/remoteEntry.js',
        comments: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/comments/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
  },
});