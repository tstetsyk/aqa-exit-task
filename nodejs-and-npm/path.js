const path = require('node:path')
const { pathToFileURL } = require('node:url')

console.log(path.resolve())
console.log(__filename)
console.log(pathToFileURL(__filename))