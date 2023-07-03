import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import { visualizer } from 'rollup-plugin-visualizer'
import typescript from '@rollup/plugin-typescript'
import tsconfigPaths from 'vite-tsconfig-paths'
import postcss from 'rollup-plugin-postcss'
import progress from 'vite-plugin-progress'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import { defineConfig } from 'vite'
import colors from 'picocolors'
import cssnano from 'cssnano'
import path from 'path'

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
		manifest: true,
		minify: true,
		reportCompressedSize: true,
		rollupOptions: {
			external: [],
			plugins: [
				// postcss({
				// 	plugins: [
				// 		// autoprefixer(),
				// 		// cssnano({
				// 		// 	preset: 'default',
				// 		// }),
				// 		// scss(),
				// 	],
				// 	// inject: false,
				// 	// only write out CSS for the first bundle (avoids pointless extra files):
				// 	// extract: true,
				// }),
				typescriptPaths({
					preserveExtensions: true,
				}),
				typescript({
					declaration: true,
					exclude: ['**/__tests__'],
					outDir: 'dist',
					sourceMap: true,
				}),
				visualizer({
					template: 'network',
					title: 'visualizer - vite-vanilla-ts-module',
				}),
			],
		},
	},

	plugins: [
		tsconfigPaths(),
		progress({
			format: `Building ${colors.green('[:bar]')} :percent :eta`,
			total: 100,
			width: 60,
		}),
	],
})
