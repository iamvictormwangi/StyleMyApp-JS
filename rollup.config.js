// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './build/index.js',
  output: {
    file: './dist/stylemyapp.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
