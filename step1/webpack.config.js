module.exports = {
    devtool: "eval",
  
    entry: {
        js: "./src/app.js",
        html: "./index.html"
    },
  
    output: {
      path: __dirname + "/dist",
      filename: "./bundle.js"
    },
  
    module: {
      loaders: [
          {
              test: /\.html$/,
              loader: "file?name=[name].[ext]"
          },
          {
              test: /\.js$/,
              loader: "babel-loader",
              exclude: /node_modules/,
              query: {
                  presets: ["es2015", "react"]
              }
          }
      ]
    }
};
