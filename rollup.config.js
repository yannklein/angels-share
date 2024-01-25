import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import json from "@rollup/plugin-json";
// import serve from 'rollup-plugin-serve';


const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  inlineDynamicImports: true,
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    json(),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      emitCss: true,
      css: css => {
        css.write('public/bundle.css')
      }
    }),
    css({ output: 'public/plugins.css' }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({ browser: true }),
    commonjs(),
    // serve({

    //   // Set to true to return index.html instead of 404
    //   historyApiFallback: false,

    //   // Options used in setting up server
    //   host: 'localhost',
    //   port: 5002,
    // }),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}