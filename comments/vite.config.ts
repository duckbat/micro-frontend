import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  base: '/~khaic/S2024/microfrontend/comments/',  // Adjusted base path
  plugins: [
    react(),
    federation ({
      name: 'comments',
      filename: 'remoteEntry.js',
      remotes: {
        mediastore: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/store/assets/remoteEntry.js',
        front_and_sidebar: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/front-and-sidebar/assets/remoteEntry.js',
        profile: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/profile/assets/remoteEntry.js',
        login: 'https://users.metropolia.fi/~khaic/S2024/microfrontend/login/assets/remoteEntry.js',
      },
      exposes: {
        './CommentArea': './src/components/CommentArea',
        './CommentForm': './src/components/CommentForm',
        './Comment': './src/components/Comment',
        './hooks/formHooks': './src/hooks/formHooks',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3005,
  },
  preview: {
    port: 3005,
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