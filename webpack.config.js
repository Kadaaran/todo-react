var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var production = false //process.argv.indexOf("--production") > -1
var autoprefixer = require("autoprefixer")

module.exports = {
  entry: {
    index: [
      "./shared/client.js",
    ],
  },

  output: {
    // ./dist
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [
      "",
      ".js",
      ".json",
      ".jsx"
    ],
  },

  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: [
            "babel"
          ],
        },

        {
          test: /\.json$/,
          loaders: [
            "json",
          ],
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader" 
        },
        {
          test: /\.(ico|jpe?g|png|gif)$/,
          loaders: [
            "file?name=[path][name].[ext]&context=./src",
          ],
        },
        {
          test: /\.(woff|ttf|otf|eot\?#.+|svg#.+)$/,
          loaders: [
            "file?name=[path][name].[ext]&context=./src",
          ],
        },
        {
          test: /\.(html|txt)$/,
          loaders: [
            "file?name=[path][name].[ext]&context=./src",
          ],
        },
      ],
    },

    sassLoader: {
      includePaths: [
        path.resolve(__dirname, '../src/styles'),
      ]
    },

    plugins: (
      [
        new ExtractTextPlugin("[name].css", {disable: !production}),
      ]
      .concat(
        production
        ? [
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false,
              },
            }),
          ]
        : []
      )
    ),
  cssnext: {
    sourcemap: !production,
    compress: production,
  },
}
