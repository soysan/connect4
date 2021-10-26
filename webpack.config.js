const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }],
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: ['.ts','.js']
  },
}
