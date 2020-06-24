const { Compiler } = require('./index.js')
const loaderUtils = require('loader-utils')
const path = require('path')

module.exports = function (content) {
  const options = loaderUtils.getOptions(this)
  return new Compiler(options || {}).parseCode(content, path.dirname(this.resourcePath))
}
