import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import {appConfig} from './app.config';
import {prepareBranding} from './scripts/branding-plugin';
const branding=prepareBranding(appConfig,process.cwd());
export default defineConfig({plugins:[react(),tailwind(),branding.plugin],define:{__APP_ASSETS__:JSON.stringify(branding.urls)},test:{environment:'jsdom',setupFiles:['./tests/setup.ts'],restoreMocks:true},build:{chunkSizeWarningLimit:900}});
