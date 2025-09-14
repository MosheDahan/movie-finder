const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // 1. נקודות כניסה
  entry: {
    main: "./src/js/main.js",
    movie: "./src/js/movie.js",
    favorites: "./src/js/favorites.js",
    advanced: "./src/js/advanced.js"
  },

  // 2. פלט
  output: {
    filename: "[name].bundle.js",      // יוצר main.bundle.js, movie.bundle.js
    path: path.resolve(__dirname, "dist"),
    clean: true                        // מוחק את dist בכל build חדש
  },

  // 3. Loaders
  module: {
    rules: [
      {
        test: /\.css$/i,               // כל קובץ .css
        use: ["style-loader", "css-loader"] // טען אותו עם loaders
      }
    ]
  },

  // 4. Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",   // קובץ המקור
      filename: "index.html",         // איך ייקרא בקובץ הסופי
      chunks: ["main"]                // יכניס רק את main.bundle.js
    }),
    new HtmlWebpackPlugin({
      template: "./src/movie.html",
      filename: "movie.html",
      chunks: ["movie"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/favorites.html",
      filename: "favorites.html",
      chunks: ["favorites"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/advanced.html",
      filename: "advanced.html",
      chunks: ["advanced"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/404.html",
      filename: "404.html",
      chunks: []
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
            from: path.resolve(__dirname, "src/images"),
            to: "images",
            noErrorOnMissing: true
        }
      ]
    })
  ],

  // 5. Dev Server
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true
  }
};
