// Режим сборки development или production
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let config = {
     // Директория с исходным кодом приложения
    context: path.join(__dirname, '/src'),
    entry: 'index.tsx',
    module: {
        rules: [
        {
            test: /\.(ts|tsx|jsx|js)?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
        // Возможность подключать css как модули, чтобы попали в сборку
      // С опцией modules при импорте стиля получаем объект с названиями ccs классов
        {
            test: /\.css$/,
            use: [
            {loader: MiniCssExtractPlugin.loader, options: {}},
            {loader: 'css-loader', options: {url: true, import: true/*, modules: true*/}},
            ],
        },
        ],
    },
    resolve: {
         // Расширения по умолчанию, если не указаны в import
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
         // Где искать файлы подключаемых модулей, в том числе главный index.js
        modules: ['./', 'node_modules'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
          // Очистить ./dist от предыдущей сборки
        clean: true,
    },
    plugins: [
    // Сборка стилей в отдельный файл
    new MiniCssExtractPlugin(),
    // Создание dist/index.html с подключенной сборкой
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
      base: '/',
    }),
    ],
    stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: true,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false,
  },
}
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';
  config.devServer = {
    static: path.join(__dirname, 'dist'),
    port: 8010,
    historyApiFallback: true,
    proxy: {
        '/api/**': {
          target: 'http://example.front.ylab.io',
          secure: false,
          changeOrigin: true,
        },
        '/uploads/**': {
          target: 'http://example.front.ylab.io',
          secure: false,
          changeOrigin: true,
        },
      },
  };
}
module.exports = config;