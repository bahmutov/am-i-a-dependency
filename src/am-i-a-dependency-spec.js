'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const chdir = require('chdir-promise')
const fromFolder = require('path').join.bind(null, __dirname)

/* global describe, it, beforeEach, afterEach */
const amIADependency = require('.')

describe('am-i-a-dependency', () => {
  it('is a function', () => {
    la(is.fn(amIADependency))
  })

  it('determines not a dependency', () => {
    la(!amIADependency())
  })

  describe('from node_modules', () => {
    beforeEach(() => {
      const mochaFolder = fromFolder('..', 'node_modules', 'mocha')
      return chdir.to(mochaFolder)
    })

    afterEach(chdir.back)

    it('determines when is a dependency', () => {
      la(amIADependency(), 'should be a dependency when in folder',
        process.cwd())
    })
  })

  describe('from @scoped node_modules', () => {
    beforeEach(() => {
      const semanticReleaseFolder = fromFolder('..', 'node_modules', '@semantic-release', 'error')
      return chdir.to(semanticReleaseFolder)
    })

    afterEach(chdir.back)

    it('determines when is a dependency', () => {
      la(amIADependency(), 'should be a dependency when in folder',
        process.cwd())
    })
  })
})
