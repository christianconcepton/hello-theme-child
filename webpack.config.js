const path = require('path');

module.exports = {
  "mode": "development",
  "entry": "./assets/scripts/main.js",
  "output": {
    "filename": '[name].bundle.js',
    "path": path.resolve(__dirname, 'dist')
  },
  "watchOptions": {
    "ignored": /node_modules/,
    "poll": 1000
  },
  "devtool": 'source-map',
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": "eslint-loader"
      },
      {
        "test": /\.(sass|scss|css)$/,
        "use": [
          'style-loader',
          'css-loader',
          {
            "loader": 'sass-loader',
            "options": {
              implementation: require("dart-sass"),
              "sourceMap": true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff2?|ico)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
  externals: {
    jquery: 'jQuery'
  }
}