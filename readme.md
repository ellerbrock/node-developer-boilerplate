![Node Developer Boilerplate](https://ellerbrock.github.io/node-developer-boilerplate?v=101)

# Node Developer Boilerplate

[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=100)](https://github.com/ellerbrock/javascript-badges/) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/ellerbrock/javascript-badges/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badges/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)

_Node / npm Boilerplate with Babel ES6 / ES7 Support, Testing, CI Integration, Code Coverage, JS Standard Style, Commit Guidelines, Git Hooks, Security Checks, Automatic Semantic Versioning, Benchmarking, Debugging, Monitoring, Source Map Generation, Auto Reload, Linting and more cool stuff ..._


## Project Status

[![Build Status](https://travis-ci.org/ellerbrock/node-developer-boilerplate.svg?branch=master)](https://travis-ci.org/ellerbrock/node-developer-boilerplate) [![codecov](https://codecov.io/gh/ellerbrock/node-developer-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/ellerbrock/node-developer-boilerplate) ![vulnerbilities](https://snyk.io/test/github/ellerbrock/node-developer-boilerplate/badge.svg) ![dependencies](https://david-dm.org/ellerbrock/node-developer-boilerplate.svg)

## Whats inside?

- Node optimized ES6 / ES7 transpilation with [Babel](https://github.com/babel/babel)
- ES6+ aware minifier based on the Babel toolchain [babili](https://github.com/babel/babili)
- Auto Reload while developing with [nodemon](https://github.com/remy/nodemon)
- Node.js Server Performance Monitoring with [nodejs-dashboard](https://github.com/FormidableLabs/nodejs-dashboard)
- Code Linting with [ESLint](https://github.com/eslint/eslint)
- Code Benchmark Testing with [benchmark.js](https://github.com/bestiejs/benchmark.js)
- ES6+ Testing via [babel-register](https://github.com/babel/babel/tree/master/packages/babel-register) with [Mocha](https://github.com/mochajs/mocha) & [Chai](https://github.com/chaijs/chai)
- HTML Export from the Test results via [mochawesome](https://github.com/adamgruber/mochawesome)
- ES6+ Code Coverage with [babel-istanbul](https://github.com/jmcriffey/babel-istanbul)
- Ready for Continuous Integration & Delivery with [travis-ci](travis-ci.org)
- Javascript [Standard](https://github.com/feross/standard) Coding Style ready
- Standard Releasing via [Standard Version](https://github.com/conventional-changelog/standard-version)
- Use Standard Conventional Commit Messages via [commitizen](https://github.com/commitizen/cz-cli)
- Debugging with [babel-node-debug](https://github.com/crabdude/babel-node-debug)
- Source Map Generation
- Vulnerability scan via [snyk](https://github.com/Snyk/snyk)
- Check for latest versions of dependencies via [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
- Run Git Hooks before commit via [ghooks](https://github.com/ellerbrock/ghooks)
- Automatically generate a Changelog from git metadata via [commit convention](https://github.com/conventional-changelog/standard-changelog)
- npm scripts to get quick up and running


## External Services

*all used services are free to use for open source projects and quick super quick registration via github authentication*

- [github](https://github.com/) - Modern Version Control System
- [npmjs](https://www.npmjs.com/) - Javascript Package Registry (optional: only if you want to publish to the npm registry)
- [travis-ci](travis-ci.org) - Continuous Integration & Delivery
- [codecov.io](https://codecov.io/) - Code Coverage
- [snyk.io](https://snyk.io) - Fix and prevent known vulnerabilities in dependencies
- [greenkeeper.io](https://greenkeeper.io) - Automated Dependency Management

In case you have to pass some secure token to Travis-CI i recommend the [travis-cli](https://github.com/travis-ci/travis.rb) tool for decryption and lots of other features. You can read more about it [here](https://docs.travis-ci.com/user/encryption-keys/). Linux / OS X Installation via `sudo gem install travis`. You can also set Token on GitHub in the Repository Settings.

![unicorn](http://i.giphy.com/3o85xBO5Rt4031bH44.gif)

## Quickstart (npm)

```
git clone https://github.com/ellerbrock/node-developer-boilerplate
cd node-developer-boilerplate
npm install
```


## Quickstart (yarn)

```
git clone https://github.com/ellerbrock/node-developer-boilerplate
cd node-developer-boilerplate
yarn
```

## Scripts

- `npm run benchmark` - run benchmark tests with `benchmark.js`
- `npm run benchmark:watch` - run benchmark tests with `benchmark.js` and watch for file changes
- `npm run build` - transpile and minify ES6+ code and generate Source Maps with `babel` & `babili`
- `npm run clean` - deletes the dist folder (Cross Platform Support via `Shell.js / shx`)
- `npm run debug` - run node in debug mode
- `npm run git:add` - add all files to git and print the status (ignore files via `.gitignore`)
- `npm run git:commit` - commit conventional messages via commitizen`
- `npm run git:push` - 
- `npm run lint` - code linting with `eslint`
- `npm run lint:fix` - fix problems automatically with `eslint`
- `npm run release` - Automatic versioning and CHANGELOG management via `Standard Version`
- `npm run scan:security` - run vulnerability tests via the node security platform `nsp`
- `npm run scan:updates` - check for latest versions of dependencies via `ncu`
- `npm run serve` - serve production files from the `./dist` folder via `node`
- `npm run setenv:dev` - deactivate npm production mode
- `npm run setenv:prod` - activate npm production mode
- `npm run test:export` - export tests results as html files in the `./reports` folder via `mochasome`
- `npm run test:watch` - run tests with `mocha` and `chai` and watch for changes
- `npm start src` - execute code with life reload via `nodemon` transpiled with `babel-node` _(add the folder and script name if not index.js as argument)_
- `npm test` - run tests with `mocha` and `chai` with spec as reporter
- `npm test:export` - export your test results via `mochawesome` as html
- `npm test:watch` - run tests with `mocha` and `chai` with spec as reporter in watch mode

```"scripts": {
       "benchmark": "babel-node benchmark",
       "benchmark:watch": "nodemon $2 --exec babel-node benchmark",
       "pre-build": "npm run clean",
       "build": "cross-env NODE_ENV=production babel -s true src -d dist",
       "clean": "shx rm -rf dist",
       "coverage": "cross-env NODE_ENV=test babel-istanbul cover src/*.js _mocha --report lcovonly -- -R spec",
       "coverage:check": "cross-env NODE_ENV=test babel-istanbul check-coverage --statements 100 --branches 100 --functions 100 --lines 100",
       "coverage:travis": "cross-env NODE_ENV=test npm run coverage && codecov",
       "debug": "nodemon $2 --exec babel-node --debug",
       "git:add": "git add --all && git status",
       "git:commit": "npm run git:add && git-cz",
       "git:push": "git push --follow-tags",
       "lint": "eslint src",
       "lint:fix": "eslint --fix src",
       "pre-monitor": "npm run build",
       "monitor": "nodejs-dashboard node dist",
       "pre-release": "npm update && npm run clean && npm run lint:fix && npm run scan:security && npm run setenv:prod && npm run test && npm run build",
       "release": "standard-version",
       "post-release": "npm run setenv:dev",
       "scan:security": "snyk test",
       "scan:updates": "ncu",
       "serve": "node dist",
       "setenv:dev": "npm config set production false",
       "setenv:prod": "npm config set production true",
       "start": "nodemon $2 --exec babel-node",
       "test": "cross-env NODE_ENV=test mocha -c -S -R spec --compilers js:babel-register --check-leaks",
       "test:watch": "cross-env NODE_ENV=test npm test -- -w",
       "test:export": "cross-env NODE_ENV=test mocha -S -R mochawesome --compilers js:babel-register --reporter-options reportDir=reports --check-leaks"
     }
```


### ECMAScript 2015 / ES6

[Node.js](https://github.com/nodejs/node) comes with a huge set of ES6 features out of the box. A detailed list of supported features can be found at <http://node.green>. To speed things up and avoid transpiling natively supported features i recommend to install only the missing parts in your current Node Version:

- `npm install --save-dev babel-preset-es2015-node6` - Node.js Version 6x
- `npm install --save-dev babel-preset-es2015-node5` - Node.js Version 5x
- `npm install --save-dev babel-preset-es2015-node4` - Node.js Version 4x
- `npm install --save-dev babel-preset-es2015` - for all Node.js Versions

### package.json

To avoid messing around with separate config files like .babelrc, .eslintrc.json and others we can put all that stuff directly in our package.json file:

```
{
  "name": "your-awesome-module",
  "version": "0.0.1",
  "babel": {
    "presets": [
      "es2015-node6",
      "stage-0",
      "babili"
    ]
  },
  "eslintConfig": {
    "extends": "standard",
    "plugins": [
      "standard",
      "promise"
    ]
  } 
  ...
```


### Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)


### License

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)