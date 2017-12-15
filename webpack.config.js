var webpack = require("webpack");
var path = require("path");

var dist = path.resolve(__dirname,"./dist");

var src = path.resolve(__dirname,"src");

/*module.exports={
    entry: src+"/app/index.js",
    output: {
      ouput: dist+"/app",
      filename: "bundel.js",
      publicPath:"/app/"
    },
    modules:{
      rules:[
        {
          test:/\.js?/,
          include: src,
          loader:"babel-loader",
          query:{
            presets:["react","es2015","stage-2"]
          }
        },
      ],
    }

}*/
module.exports={
    entry:{app:[
        './src/app/index.js',
      ]},
    output:{
      path:dist+"/app/",
      filename:'bundel.js',
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
            }
          }
        ],//end of rules array

    },//end of module object



};
