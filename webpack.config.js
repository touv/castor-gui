var webpack = require('webpack')
var path = require('path')
var optimist = require('optimist')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ENV = optimist.argv.env || 'development'

var config = {
  themeLoader: {
    themes: [
      './src/theme/bootstrap.scss',
      './node_modules/vuestrap/theme/_bootstrap.scss',
      './node_modules/vuestrap/bootstrap/bootstrap.scss'
    ]
  },
  resolve: {
    root: path.resolve('./')
  },
  entry :  './src/index.js'
  ,
  output : {
    path: './dist',
    publicPath: '/dist/',
    libraryTarget: "var",
    library: "CastorGUI"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve('./src'),
          path.resolve('./node_modules'),
        ],
        loader: 'babel'
      },
      {
        test: /\.html$/,
        exclude: /(snippet.html)/,
        loader: 'html'
      },
      {
        test: /snippet.html$/,
        loader: 'html!highlightjs?lang=html'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true!!vuestrap-theme-loader')
      }
    ]
  },
  plugins : [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"' + ENV + '"' } })
  ]
}


// define plugins for production
if (ENV === 'production') {
  config.output.filename = './js/castor-gui.min.js'
  config.plugins.push(new ExtractTextPlugin('./css/castor-gui.min.css'))
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      warnings: false
    }
  }))
}
else {
  config.output.filename = './js/castor-gui.js'
  config.plugins.push(new ExtractTextPlugin('./css/castor-gui.css'))
  config.devtool = 'source-map'
}


module.exports = config
