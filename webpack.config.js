import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default {
  entry: './scripts/src/index.ts',
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
    filename: './bundle.js',
    path: resolve(__dirname, 'scripts/dist')
  },
  devServer: {
    static: join(__dirname, 'scripts/dist'),
    compress: true,
    port: 4000
  }
}
