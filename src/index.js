'use strict'

import sum from './sum'

const log = console.log

const dbConfig = {
  server: 'localhost',
  isOnline: true
}

log(`Result: ${sum(1, 2)}`)

const dbCon = new Promise((resolve, reject) => {
  log(`Try connecting to database: ${dbConfig.server}`)
  dbConfig.isOnline ? resolve('online') : reject('offline')
}).then(data => log(`Promise resolved: ${data}`))
  .catch(err => log(`Promise rejected: ${err.toString()}`))
// .finally(log('finally ...'))
// to use .finally() we still need to install a ES6-Shim:
// https://www.npmjs.com/package/promise.prototype.finally

log(`Promise Info: ${dbCon}`)

