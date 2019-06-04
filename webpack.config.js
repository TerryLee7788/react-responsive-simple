var autoprefixer = require('autoprefixer');

module.exports = {
    // https://webpack.js.org/configuration/entry-context
    entry: [
        './src/index.js'
    ],
    // https://webpack.js.org/configuration/output
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    // https://webpack.js.org/configuration/dev-server
    devServer: {
        contentBase: './dist'
    },
    // https://webpack.js.org/configuration/module
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    // 'eslint-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // https://github.com/webpack-contrib/css-loader#options
                        options: {
                            // sourceMap: true,
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    // https://github.com/postcss/postcss-loader
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // https://github.com/postcss/postcss-loader#autoprefixing
                                autoprefixer({ browsers: ['last 2 versions'] }),
                            ]
                        }
                      }
                ]
            }
        ]
    },
    // https://webpack.js.org/configuration/resolve/
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    }
};
