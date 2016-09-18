'use strict';// ES6 Modules: import / export
var _sum=require('./sum');// ES6 const
const log=console.log;// ES6 Template Strings
log(`Result: ${(0,_sum.sum)(1,2)}`);// ES6 let
let dbConfig={server:'localhost',isOnline:!0};// ES6 Promises
const dbCon=new Promise((a,b)=>{log(`Try connecting to database: ${dbConfig.server}`),dbConfig.isOnline?a('online'):b('offline')}).then(a=>log(`Promise resolved: ${a}`)).catch(a=>log(`Promise rejected: ${a.toString()}`));// .finally(log('finally ...'))
// to use .finally() we still need to install a ES6-Shim:
// https://www.npmjs.com/package/promise.prototype.finally
log(`\r\nPromise Info: ${dbCon}`);