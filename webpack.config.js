var webpack                  = require("webpack"),
    path                     = require("path"),
    ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

module.exports = {
    devtool  : "source-map",
    entry    : {
        "app"   : "./app/boot.ts",
        "vendor": [
            'core-js',
            'zone.js/dist/zone',
            'zone.js/dist/long-stack-trace-zone',
            "@angular/common",
            "@angular/compiler",
            "@angular/core",
            "@angular/forms",
            "@angular/http",
            "@angular/router",
            '@angular/platform-browser-dynamic',
            '@angular/platform-browser',
            '@angular-redux/store',
            "rxjs"
        ]
    },
    output   : {
        filename: "[name].js",
        path    : path.resolve(__dirname, './public')
    },
    resolve  : {
        extensions: [".js", ".ts", ".css"]
    },
    module   : {
        loaders: [
            {
                test  : /\.ts/,
                loader: "ts-loader"
            }, {
                test   : /\.css$/,
                exclude: /node_modules/,
                loader : "style-loader!css-loader"
            }
        ]
    },
    plugins  : [
        new webpack.optimize.CommonsChunkPlugin({
            name     : 'vendor',
            filename : 'vendor.js',
            minChunks: 2
        }), new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        )
    ],
    devServer: {
        contentBase       : path.join(__dirname, "public"),
        historyApiFallback: true,
        compress          : false,
        quiet             : false,
        headers           : {"X-Custom-Header": "yes"},
        stats             : {colors: true},
        port              : 5000,
        inline            : true
    }
};