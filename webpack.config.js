const path = require('path')

module.exports = env =>{

    const isProd = env == 'production'
    return {
        mode: isProd ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            path: path.join(__dirname,'./public'),
            filename: 'bundle.js'
        },

        devServer:{
            contentBase: path.join(__dirname,'./public'),
            port: 8080
        },

        module: {
            rules: [
                {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname,'src'),
                use: [
                    {
                    loader: 'babel-loader',
                }
                ]
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    ]

            }
            ]
        },
        resolve: {
            mainFields: ['browser', 'module', 'main'],
            fallback: {
                "https": false,
                "http" : false
            }
        },
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map'
    }
}