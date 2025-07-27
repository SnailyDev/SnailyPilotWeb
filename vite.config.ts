import { defineConfig } from 'vite'

export default defineConfig({
root: "src",
build: {
    rollupOptions: {
      input: {
        main: './index.html',
        license: './license.html'
      },
    },
    outDir: '../dist'
}
})