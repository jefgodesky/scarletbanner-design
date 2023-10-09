import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import getVersionPath from './release/get-version-path.js'

export default (env: any, argv: any): webpack.Configuration => {
  const FILENAME = fileURLToPath(import.meta.url)
  const DIR = path.dirname(FILENAME)
  const [version] = getVersionPath()
  const base = argv.mode === 'production'
    ? `https://design.scarletbanner.com${version}`
    : ''

  return {
    entry: './scripts/src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(DIR, 'scripts/dist')
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
