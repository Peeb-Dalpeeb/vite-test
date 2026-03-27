// vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Simulates a browser environment
    globals: true,        // Allows us to use describe() and it() without importing them
    setupFiles: './src/setupTests.ts', // Runs before our tests start
  },
});