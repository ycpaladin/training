module.exports = {
  entry:[
    './main.js',
    './src/ListItem.js',
    './src/List.js'
  ],
  output: {
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
  }
};