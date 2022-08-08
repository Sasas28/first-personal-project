const path = require('path')
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './site/assets/scripts/App.js', //webpack will watch this file.
    output: {
        filename: 'bundled.js', //set your desired js file name.
        path: path.resolve(__dirname, 'site') // set where you want to put your created js file.
    },
    mode: 'development', //set your environment as development.
    watch: true, //webpack will continue to bundle that App.js file.
    module: {
        rules: [
            {
                test:/\.css$/i, //webpack will test this file.
                use: [
                        'style-loader', 
                        'css-loader', 
                        {
                            loader: 'postcss-loader', 
                            options: {
                                postcssOptions: {plugins: postCSSPlugins}
                            }
                        }
                    ] //webpack will use this packages to test the file.
            }
        ]
    }
}