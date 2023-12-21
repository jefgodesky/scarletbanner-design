import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import { versionPath } from './release/version.js'

export default (env, argv) => {
  const FILENAME = fileURLToPath(import.meta.url)
  const DIR = path.dirname(FILENAME)
  const base = argv.mode === 'production'
    ? `https://design.scarletbanner.com${versionPath}`
    : ''

  return {
    entry: './scripts/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          include: path.resolve(DIR, 'scripts'),
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      cacheWithContext: false,
      extensions: ['.ts', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(DIR, 'dist/scripts')
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BASE_PATH': JSON.stringify(base)
      })
    ]
  }
}
