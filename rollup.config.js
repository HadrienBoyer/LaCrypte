import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

module.exports = {
	input: 'client/source/lacrypte.js',
	output: {
		file: 'client/public/js/lacrypte.js',
		format: 'iife'
	},
	plugins: [
		nodeResolve(),
		commonjs()
	]
};