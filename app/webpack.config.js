var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  // entry file
  entry: './index.js',
  output: {
    path: __dirname + '/../server/static',
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  // we will use webpack-dev-server
  devServer: {
    inline: true, // reload on the fly (auto refresh)
    port: 4567 // which port to run the server on
  },
  module: {
    // loaders are transformers basically
    loaders: [
      {
        // All files that end with `.js`
        test: /\.js$/,
        // Do not consider node_modules for webpack bundling
        exclude: /node_modules/,
        // use babel as the loader (transformer)
        loader: 'babel',
        // Passing queries/arguments to the loader
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      }
    ]
  }
}
