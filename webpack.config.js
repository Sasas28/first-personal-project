const path = require('path')
const postCSSPlugins = [
    require('postcss-import'),
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
    devServer: {
        before: function(site, server) {
            server._watch('./site/**/*.html') //automatic reload everytime html file save changes.
        },
        contentBase: path.join(__dirname, 'site'), //webpack is pointing towards this directory.
        hot: true, //automatic reload everytime css and js file save changes.
        port: 3000, //localhost portal.
        host: '0.0.0.0' //to have access on other device.
    },
    mode: 'development', //set your environment as development.
  //watch: true, webpack will continue to bundle that App.js file.
    module: {
        rules: [
            {
                test:/\.css$/i, //webpack will test this file.
                use: [
                        'style-loader', 
                        'css-loader?url=false', //disable 'css-loader' in order to manage our image file manually.
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
