'use strict'

// ES6 Modules: import / export
import { sum } from './sum'

// ES6 const
const log = console.log

// ES6 Template Strings
log(`Result: ${sum(1, 2)}`)

// ES6 let
let dbConfig = {
  server: 'localhost',
  isOnline: true
}

// ES6 Promises
const dbCon = new Promise((resolve, reject) => {
  log(`Try connecting to database: ${dbConfig.server}`)
  dbConfig.isOnline ? resolve('online') : reject('offline')
}).then(data => log(`Promise resolved: ${data}`))
  .catch(err => log(`Promise rejected: ${err.toString()}`))
// .finally(log('finally ...'))
// to use .finally() we still need to install a ES6-Shim:
// https://www.npmjs.com/package/promise.prototype.finally