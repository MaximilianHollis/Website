import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react({
    include: "**/*.tsx",
  }),
  imagePresets({
    thumbnail: widthPreset({
      class: 'img thumb',
      loading: 'lazy',
      widths: [48, 96],
      formats: {
        webp: { quality: 50 },
        jpg: { quality: 70 },
        png: { quality: 70 },
      },
    }),
  }),
  viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    mozjpeg: {
      quality: 20,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    webp:{
      quality: 20,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  }),]
})
