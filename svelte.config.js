import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex({ extensions: ['.md'], layout: './src/components/MdLayout.svelte' })],
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		}),

		paths: {
			// change below to your repo name
			base: dev ? '' : '/ur_helper'
		},

		appDir: 'internal',

		trailingSlash: 'always'
	}
};

export default config;
