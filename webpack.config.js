var path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //     rules: [{
    //         test: /\.js$/, // запустим загрузчик во всех файлах .js
    //         exclude: /node_modules/, // проигнорируем все файлы в папке  node_modules 
    //         use: 'jshint-loader'
    //     }]
    // }
}
