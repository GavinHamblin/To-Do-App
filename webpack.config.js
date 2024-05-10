const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
   
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    output: {
      filename: '[name][contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: '[name][ext]',
      
    },
   
    devServer : {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.js$/,
            exclude: /\node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
          }
        ],
      },
      

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chicken',
            filename: 'index.html',
            template: 'src/template.html'
        }),
    ]
  };