import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      output: {
        // Set the correct MIME type for JavaScript module scripts
        format: 'es',
      },
    },
  },
});
