var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var WebfontPlugin = require('webfont-webpack-plugin').default;
// console.log(WebfontPlugin);

// const WorkboxPlugin = require('workbox-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var extractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
});

module.exports = {
  mode: 'production',
  entry: {
    home: './src/js/pages/home.js',
    // map: './src/js/pages/map.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath :
            // }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: true,
            },
          },

          // 'style-loader'
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [':data-src'],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
              plugins: [
                'transform-es2015-destructuring',
                'transform-object-rest-spread',
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|ico|woff2|eot|ttf|woff)$/,
        use: {
          loader: 'file-loader',
          // options: {
          //     name: "./dist/[path][name].[hash].[ext]",
          //     context: '',
          //     useRelativePath: true
          // }
        },
      },
      {
        test: /\.(jpg|png|svg|ico|woff2|eot|ttf|woff)$/,
        use: {
          loader: 'url-loader?limit=100000',
          // options:{
          //     name: "./dist/[path][name].[hash].[ext]"
          // }
        },
      },
    ],
  },
  plugins: [
    extractPlugin,
    /*new BundleAnalyzerPlugin({
            reportFilename : path.resolve(__dirname, 'dist')
        })*/
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['home'],
    }),
    // new HtmlWebpackPlugin({
    //     filename: 'map.html',
    //     template: './src/map.html',
    //     chunks: ['map']
    // }),
    new CopyWebpackPlugin([{ from: './src/assets/img', to: './assets/img' }]),
    new CopyWebpackPlugin([{ from: './src/assets/svg', to: './assets/svg' }]),
    new CopyWebpackPlugin([
      { from: './src/assets/fonts', to: './assets/fonts' },
    ]),
    // new CopyWebpackPlugin([
    //     {from: './src/favicon.ico', to: './'}
    // ])
    //   new WebfontPlugin({
    //     files: [ path.resolve(__dirname, "./src/assets/fonts/flaticon/font/Flaticon.eot"),
    //     path.resolve(__dirname, "./src/assets/fonts/flaticon/font/Flaticon.ttf"),
    //     path.resolve(__dirname, "./src/assets/fonts/flaticon/font/Flaticon.woff"),
    //     path.resolve(__dirname, "./src/assets/fonts/flaticon/font/Flaticon.woff2"),
    // ],
    //     dest: path.resolve(__dirname, "./assets/fonts"),
    //     // destTemplate: path.resolve(__dirname, "../fixtures/css")
    //   })
  ],
};
