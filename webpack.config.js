const path = require('path');
const fs = require('fs');

const allPath = {
    public: path.resolve(__dirname, './public'),
    src: path.resolve(__dirname, './src'),
    dist: path.resolve(__dirname, './dist')
}

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = (env, argv) => {
    return {
        entry: {
            main: [
                `${allPath.src}/js/index.js`,
                `${allPath.src}/css/main.scss`,
            ],
            vue: [
                `${allPath.src}/vue/project/index.js`,
            ]
        },
        output: {
            path: allPath.public,
            publicPath: '/',
            filename: './javascripts/[name].js'
        },
        resolve: {
            extensions: ['.js', '.vue']
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['javascripts*', 'styles*']
            }),
            new MiniCssExtractPlugin({
                filename: "styles/[name].css",
            }),
            new VueLoaderPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [
                        `${allPath.src}/js`,
                        `${allPath.src}/vue`
                    ],
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.vue$/,
                    include: `${allPath.src}/vue`,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'vue-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                            }
                        },
                    ],
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                            }
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: argv.mode == "development",
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: argv.mode == "development"}
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: argv.mode == "development"
                            }
                        },
                    ]
                },
            ]
        }
    }
}