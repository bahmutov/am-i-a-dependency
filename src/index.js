'use strict'

const path = require('path')

function amIaDependency () {
  const cwd = process.cwd()
  const parts = cwd.split(path.sep)
  const parentFolder = parts[parts.length - 2]
  const scopedParentFodler = parts[parts.length - 3]
  return parentFolder === 'node_modules' || scopedParentFodler === 'node_modules'
}

module.exports = amIaDependency
