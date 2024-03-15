const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: { // Выходной файл
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.css$/, // Для файлов .css
        use: [MiniCssExtractPlugin.loader, 'css-loader'] // Используйте эти загрузчики
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон для HTMLWebpackPlugin
      filename: 'index.html' // Имя выходного файла
    }),
    new MiniCssExtractPlugin() // Для извлечения CSS в отдельный файл
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  }
};
