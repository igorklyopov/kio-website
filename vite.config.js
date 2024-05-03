import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import path from 'path'
import { defineConfig } from 'vite'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
		ViteImageOptimizer({
			svg: {
				plugins: [
					'removeDoctype',
					'removeXMLProcInst',
					'minifyStyles',
					'sortAttrs',
					'sortDefsChildren',
				],
			},
			png: {
				quality: 70,
			},
			jpeg: {
				quality: 70,
			},
			jpg: {
				quality: 70,
			},
		}),
    {
			...imagemin(['./src/images/**/*.{jpg,png,jpeg}'], {
				destination: './src/images/webp/',
				plugins: [
					imageminWebp({ quality: 70 })
				]
			}),
			apply: 'serve',
		}
  ],
	build: {
    rollupOptions: {
      input: Object.fromEntries(
				glob.sync(['./*.html', './pages/**/*.html']).map(file => [
					path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
					fileURLToPath(new URL(file, import.meta.url))
				])
			)
    },
  },
})