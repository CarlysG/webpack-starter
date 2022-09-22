
// Configuracion de webpack

// Creación de archivos HTML para servir sus paquetes de paquetes web. 
const HtmlWebPack       = require('html-webpack-plugin');
// Para estilos globales
const MiniCssExtract    = require("mini-css-extract-plugin");
// Para copiar rchivos o directorios
const CopyPlugin        = require("copy-webpack-plugin");
// Para minimizar cod
const CssMinimizer      = require("css-minimizer-webpack-plugin");
// Para optimizar y minimizar css
const Terser            = require("terser-webpack-plugin");

// Inicio
module.exports = {
    // Determina que es una aplicacion de desarrollo - cuando esta en desarrollo el main.js es facil de leer
    mode: 'production',

    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.thml$/,
                loader: 'html-loader',
                options: {
                    sources:false
                }
            },
            {
                // Para poder importar css
                test:/\.css$/,
                exclude: /styles.css$/, // Para excluir archivos css
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },

    plugins: [
        new HtmlWebPack({
            title: 'Mi WebPack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css', // Se puede modificar el nombre: 'nuevo-estilo.css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
            
        })
    ]
}