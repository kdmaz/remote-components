import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      filename: 'remoteEntry.js',
      remotes: {
        remoteComponent1: 'http://localhost:3001/assets/remoteEntry.js',
        remoteComponent2: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
