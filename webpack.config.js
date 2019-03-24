const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: "[name].css",
                chunkFilename: "[id]".css
            }
        )
    ],
    entry: path.resolve(__dirname, 'app/views/home/index.js'),
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'bundle.js',
    },
    watch: true,
    resolve: {extensions: ['.js', '.jsx']},
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,            
                    },
                    "css-loader"
                ]
            }
        ]
    }
}