import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export const createConfig = ({
  input = 'src/index.ts',
  banner = 'Copyright © NOuSantx',
  name = '__nsx',
  sourcemap = false
}) => ({
  input,
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',
      banner,
      sourcemap
    },
    {
      file: 'dist/index.min.cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap,
      plugins: [
        terser({
          format: {
            comments: false,
            preamble: banner
          },
          mangle: false,
          mangle: true,
          compress: {
            defaults: true,
            passes: 2
          }
        })
      ]
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      exports: 'named',
      sourcemap,
      name,
      banner
    },
    {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      exports: 'named',
      sourcemap,
      name,
      plugins: [
        terser({
          format: {
            comments: false,
            preamble: banner
          },
          mangle: false,
          mangle: true,
          compress: {
            defaults: true,
            passes: 2
          }
        })
      ]
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      banner,
      sourcemap
    },
    {
      file: 'dist/index.esm.min.js',
      sourcemap,
      format: 'es',
      plugins: [
        terser({
          format: {
            comments: false,
            preamble: banner
          },
          mangle: true,
          compress: {
            defaults: true,
            passes: 2
          }
        })
      ]
    }
  ],
  plugins: [typescript(), resolve(), commonjs()]
})

// export default config
