var webpack = require("webpack");
var path = require("path");

var dist = path.resolve(__dirname,"./dist");

var src = path.resolve(__dirname,"src");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry:{bundle:[
        './src/app/index.js',
        './src/app/css/materialize.css',
        './src/app/css/style.css'
      ],
     app:[
         './src/app/js/jquery.js',
          './src/app/js/materialize.js'

      ]
    },
    output:{
      path:dist+"/app/",
      filename:'[name].js',
      publicPath:"/dist/app"
    },
    module:{
        rules:[
          {
            test:/\.js?/,
            include: src,
            loader:"babel-loader",
            query:{
              presets:["react","es2015","stage-2"]
            },
           exclude:['node_modules','./src/app/js/']
          },
          {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
              })
          },
          {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
        ],//end of rules array

    },//end of module object
    plugins: [
  //  new ExtractTextPlugin('style.css')
    //if you want to pass in options, you can do so:
   new  webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery"
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
    //'publicPath':'/dist/app'
    })
  ]

};
