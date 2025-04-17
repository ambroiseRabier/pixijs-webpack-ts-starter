// eslint-disable-next-line
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      // eslint-disable-next-line no-undef
      'process.env.SUBPATH': JSON.stringify(process.env.SUBPATH || ''),
    }),
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.html/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        }
      },
    ]
  }
};
