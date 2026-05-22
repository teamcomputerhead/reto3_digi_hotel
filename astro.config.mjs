// @ts-check
import { defineConfig } from 'astro/config';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [sentry({
    telemetry: false
  }), spotlightjs(), icon()],
  server: {
    allowedHosts: true,
  },

  vite: {
    plugins: [tailwindcss()],
  }
});
