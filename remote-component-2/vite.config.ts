import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-component-2',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteComponent2': './src/RemoteComponent2',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
