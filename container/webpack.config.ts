import * as path from 'path';
import * as webpack from 'webpack';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';
// types for devServer
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  devServer: {
    port: 8080
  },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.container.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js'
      }
    })
  ]
};

export default config;
