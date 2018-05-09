var path= require("path");
var webpack= require("webpack"); 
module.exports={
    mode: 'development',
    entry: path.resolve(__dirname,'src/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    module:{
        rules:[{
            test:/\.js?$/,
            exclude:/node_modules/,
            loader: 'babel-loader',
            query:{
                presets:["react","es2015","stage-2"]
            }
        }]
    },    
};