import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-component-1',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteComponent1': './src/RemoteComponent1',
      },
      remotes: {
        remoteComponent2: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
