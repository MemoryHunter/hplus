import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/hplus.js',
    output: {
      file: 'dist/hplus.js',
      format: 'iife',
      name: 'hplus'
    },
    plugins: [
      resolve(),
      commonjs()
    ],
    watch: {
      include: 'src/**'
    }
  },
  {
    input: 'src/hplus.js',
    output: {
      file: 'dist/hplus.cjs.js',
      format: 'cjs',
      exports: 'default'
    },
    plugins: [
      resolve(),
      commonjs()
    ],
    watch: {
      include: 'src/**'
    }
  },
  {
    input: 'src/hplus.js',
    output: {
      file: 'dist/hplus.es.js',
      format: 'es',
    },
    plugins: [
      resolve(),
      commonjs()
    ],
    watch: {
      include: 'src/**'
    }
  }
]
