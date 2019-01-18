import * as path from "path";
import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as webpack from "webpack";

const development = process.env["NODE_ENV"] == "development";
const distFolder = "dist";

var config: webpack.Configuration | any = {
    entry: [path.resolve(__dirname, "src/index.ts")],
    target: "web",
    output: {
        path: path.resolve(__dirname, distFolder),
        filename: "index.js",
        library: "yack-test-plugins",
        libraryTarget: "umd"
    },
    mode: development ? "development" : "production",
    devtool: development ? "inline-source-map" : false,
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images/"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, distFolder)], { allowExternal: true }),
        new CopyWebpackPlugin(["./package.json"])
    ]
};

module.exports = config;
