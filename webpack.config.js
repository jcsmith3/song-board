const path = require('path')

module.exports = {
    mode: 'development',
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
    devtool: 'eval-source-map'
}