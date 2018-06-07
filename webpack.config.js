//Webpack needs to know entry -> output
const path = require('path');

// console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './src/app.js',
  output: {
    // path needs to be an absolute path
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // loaders allow you to do something to a file extension when it's loaded
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        // "use" allows us to use an array of loaders
        use: [
          'style-loader',
          // injects the css in a style tag into the DOM
          'css-loader',
          'sass-loader'
        ]
      }
      //  For loading in css
      //  {
      //    // "use" allows us to use an array of loaders
      //    use: [
      //      'style-loader',
      //      'css-loader'
      //    ],
      //    test: /\.css$/,
      //    exclude: /node_modules/
      //  }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // We need the absolute path to where we can find the public assets
    contentBase: path.join(__dirname, 'public'),
    // This is for dev to tell the server to always load the index.html regardless of route.
    // Cannot be used in production
    historyApiFallback: true,
  }
}

