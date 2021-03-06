/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
'use strict'

const path = require('path')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const { createUnplugin } = require('unplugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const isProd = process.env.I18N_EASY_ENV === 'production'

/** @type {import('webpack').Configuration} */
const config = {
  mode: isProd ? 'production' : 'development',
  target: 'node',
  optimization: {
    minimize: false,
  },
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  devtool: isProd ? undefined : 'source-map',
  externals: {
    'vscode': 'commonjs vscode',
    'nodejieba': 'nodejieba',
    'esm': 'esm',
    'ts-node': 'ts-node',
    'consolidate': 'consolidate',
    'less': '_',
    'sass': '_',
    'stylus': '_',
    'prettier': 'prettier',
    '@microsoft/typescript-etw': '_',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // @ts-ignore
    new FilterWarningsPlugin({
      exclude: /Critical dependency: the request of a dependency is an expression/,
    }),
    createUnplugin(() => {
      return {
        name: 'replace',
        enforce: 'pre',
        transform(code) {
          return code.replace(/process\.env\.NODE_ENV/g, JSON.stringify(process.env.I18N_EASY_ENV))
        },
      }
    }).webpack(),
    ...isProd ? [new UglifyJSPlugin()] : [],
  ],
}

module.exports = config
