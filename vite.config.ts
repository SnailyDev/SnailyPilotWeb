import { defineConfig } from 'vite'

export default defineConfig({
root: "src",
build: {
    rollupOptions: {
      input: {
        index: './index.html',
        license: './license.html'
      },
    },
    outDir: '../dist'
}
})