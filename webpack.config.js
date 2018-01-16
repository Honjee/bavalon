var path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: './client/avalon',
  output: {
    filename: './app/assets/javascripts/components/bundle.js'
  },
  resolve: {
    modules: [
            "node_modules",
        ],
    extensions: ['.js', '.jsx', '.ts', '.svg', '*']
  },
  plugins: ['lodash', ...plugins],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          plugins: ['lodash'],
          presets: ['react', 'es2015', ['@babel/env', { 'targets': { 'node': 6 } }]]
        }
      }
    ]
  },

  devtool: 'source-maps'
};
