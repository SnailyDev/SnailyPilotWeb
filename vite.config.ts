import { defineConfig } from 'vite'

export default defineConfig({
root: "src",
build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        license: './src/license.html'
      },
    },
    outDir: '../dist'
}
})