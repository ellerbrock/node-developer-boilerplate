import sum from '../src/sum'
import { expect } from 'chai'

describe('Example ES6+ Mocha / Chai Test', function () {
  let a = 1
  let b = 2

  beforeEach(function () {
    a = 1
    b = 2
  })

  it('sum should be a function', function () {
    expect(sum).to.be.a('function')
  })

  it('result should return a number', function () {
    expect(sum(a, b)).to.be.a('number')
  })

  it(`expect: ${a} + ${b} = ${a + b}`, function () {
    expect(sum(a, b)).to.be.eql(3)
  })
})
