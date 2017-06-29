'use strict'


/* global describe, it */
const amIADependency = require('.')

describe('am-i-a-dependency', () => {
  it('write this test', () => {
    console.assert(amIADependency, 'should export something')
  })
})
