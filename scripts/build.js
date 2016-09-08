const webpack = require('webpack')

const dirs = ['controller', 'viewer']

dirs.forEach(dir => {
  webpack({
    context: process.cwd(),
    entry: `./src/${dir}/index.js`,
    output: {
      filename: 'index.js',
      path: `./build/${dir}`
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-1'],
            plugins: ['transform-pug-to-react'],
            cacheDirectory: 'tmp'
          }
        }
      ]
    },
    watch: true
  }, (err, stat) => {
    if (err) {
      console.log(err)
    }
    if (stat.compilation.errors.length > 0) {
      console.log(stat.compilation.errors)
    }
    const d = new Date()
    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${dir} Compiled`)
  })
})
