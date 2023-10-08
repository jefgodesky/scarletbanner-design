import path from 'path'
import { fileURLToPath } from 'url'

const FILENAME = fileURLToPath(import.meta.url)
const DIR = path.dirname(FILENAME)

export default {
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
  }
}
