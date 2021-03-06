const merge = require('webpack-merge')
const common = require('./webpack.common')
const dev = require('./webpack.dev')
const prod = require('./webpack.prod')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'start') {
  module.exports = merge(common, dev)
}

if (TARGET === 'build') {
  module.exports = merge(common, prod)
}
