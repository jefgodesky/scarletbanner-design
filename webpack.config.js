import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default {
  entry: {
    loader: './scripts/src/loader.ts',
    code: './scripts/src/modules/code.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [{
          loader: 'ts-loader',
          options: { configFile: 'scripts/src/tsconfig.json' }
        }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: './[name].js',
    path: resolve(__dirname, 'scripts/dist')
  }
}
