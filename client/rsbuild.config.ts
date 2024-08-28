import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './src/index.html',
    favicon: './src/assets/icons/favicon.svg'
  },
  output: {
    assetPrefix: 'auto'
  }
})
