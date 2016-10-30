'use strict'

import benchmark from 'benchmark'

const suite = new benchmark.Suite

const a = 1000
const b = 2000

let result = 0

suite
  .add('Benchmark Description 1', function () {
    result = a + b
  })
  .add('Benchmark Description 2', function () {
    result = ((a * 1000) / 1000) + ((b * 1000) / 1000)
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true })
