![Babel ES7 npm](https://github.frapsoft.com/top/babel-es7.jpg?v=101)


# Babel ES6 / ES7 npm Skeleton

[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=100)](https://github.com/ellerbrock/javascript-badges/) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/ellerbrock/javascript-badges/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badges/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)

_Node / npm Boilerplate with Babel ES6 / ES7 Support, Testing, Benchmarking, Debugging, Auto Reload, Linting and other cool stuff._


## Whats inside?

- Node optimized ES6 / ES7 transpilation with [Babel](https://github.com/babel/babel)
- ES6+ aware minifier based on the Babel toolchain [babili](https://github.com/babel/babili)
- Code monitoring and auto server restart with [nodemon](https://github.com/remy/nodemon)
- ES6+ Testing via [babel-register](https://github.com/babel/babel/tree/master/packages/babel-register) with [Mocha](https://github.com/mochajs/mocha) & [Chai](https://github.com/chaijs/chai)
- HTML Test Report via [mochawesome](https://github.com/adamgruber/mochawesome)
- Code Linting with [ESLint](https://github.com/eslint/eslint)
- Benchmark Testing with [benchmark.js](https://github.com/bestiejs/benchmark.js)
- Javascript [Standard](https://github.com/feross/standard) Coding Style ready
- Debugging with [babel-node-debug](https://github.com/crabdude/babel-node-debug)
- Sourcemap generation
- Vulnerability scan via [nsp](https://github.com/nodesecurity/nsp)
- Check for latest versions of dependencies via [ncu](https://github.com/tjunnone/npm-check-updates)
- Git commit hook to use conventional commit messages via [commitizen](https://github.com/commitizen/cz-cli)
- Generate a changelog from git metadata with angular [commit convention](https://github.com/conventional-changelog/standard-changelog)
- Semantic Releasing via [Standard Version](https://github.com/conventional-changelog/standard-version)
- Cross platform script support via [Shell.js / shx](https://github.com/shelljs/shx)
- npm scripts to quickly run tasks

**Info:** A yarn version with the same setup is available here: [yarn-node-boilerplate](https://github.com/ellerbrock/yarn-node-boilerplate)

![unicorn](http://i.giphy.com/3o85xBO5Rt4031bH44.gif)


## Quickstart (npm)

```
git clone https://github.com/ellerbrock/node-npm-boilerplate
cd node-npm-boilerplate
npm install
```


## Quickstart (yarn)

```
git clone https://github.com/ellerbrock/node-npm-boilerplate
cd node-npm-boilerplate
yarn
```

## Scripts

- `npm run benchmark` - run benchmark tests with `benchmark.js`
- `npm run benchmark:watch` - run benchmark tests with `benchmark.js` and watch for file changes
- `npm run build` - transpile and minify ES6+ code and create sourcemaps with `babel` & `babili`
- `npm run clean` - deletes the dist folder (Cross Platform Support via `Shell.js / shx`)
- `npm run debug src` - execute code with debug flag enabled _(add the folder and script name if not index.js as argument)_
- `npm run git:add` - add all files to git and print the status (ignore files via `.gitignore`)
- `npm run git:commit` - commit conventional messages via commitizen`
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

```
  "scripts": {
    "benchmark": "babel-node benchmark",
    "benchmark:watch": "nodemon $2 --exec babel-node benchmark",
    "build": "babel -s true src -d dist",
    "clean": "shx rm -rf dist",
    "debug": "nodemon $2 --exec babel-node --debug",
    "git:add": "git add --all && git status",
    "git:commit": "git-cz",
    "lint": "eslint src",
    "lint:fix": "eslint --fix src",
    "postrelease": "npm run setenv:dev",
    "prerelease": "npm run clean && npm run lint:fix && npm run scan:security && npm run setenv:prod && npm run build",
    "release": "standard-version",
    "scan:security": "nsp check",
    "scan:updates": "ncu",
    "serve": "node dist",
    "setenv:dev": "npm config set production false",
    "setenv:prod": "npm config set production true",
    "start": "nodemon $2 --exec babel-node",
    "test": "mocha -c -S -R spec 'tests' --compilers js:babel-register --check-leaks",
    "test:export": "mocha -S -R mochawesome 'tests' --compilers js:babel-register --reporter-options reportDir=reports --check-leaks",
    "test:watch": "mocha -w -c -S -R spec 'tests' --compilers js:babel-register --check-leaks"
  }
```


## Manual Installation / Build your own Boilerplate

- `git init` - create a new git repository
- `npm init -y` - create a initial package.json
- `npm install --save-dev babel-cli nodemon eslint` - install development dependencies
- `eslint --init` - setup your ESLint Style (in my case JS Standard)


### ECMAScript 2015 / ES6

[Node.js](https://github.com/nodejs/node) comes with a huge set of ES6 features out of the box. A detailed list of supported features can be found at <http://node.green>. To speed things up and avoid transpiling natively supported features i recommend to install only the missing parts in your current Node Version:

- `npm install --save-dev babel-preset-es2015-node6` - Node.js Version 6x
- `npm install --save-dev babel-preset-es2015-node5` - Node.js Version 5x
- `npm install --save-dev babel-preset-es2015-node4` - Node.js Version 4x
- `npm install --save-dev babel-preset-es2015` - for all Node.js Versions


### ECMAScript X / Stage 0

_Give me that cutting edge stuff right now!_  

`npm install --save-dev babel-preset-stage-0` - ECMAScript [Stage 0](https://github.com/tc39/proposals/blob/master/stage-0-proposals.md) Features


### ES6+ aware Minifier

_Minify ES6+ Code directly with [babili](https://github.com/babel/babili)._

- `npm install --save-dev babili babel-preset-babili`


### Testing

_Testing with [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai), HTML Reports via [mochawesome](https://github.com/adamgruber/mochawesome)_

- `npm install --save-dev babel-register` - install `babel-register` to test your ES6+ Code directly
- `npm install --save-dev mocha chai` - install `mocha` and `chai` for testing
- `npm install --save-dev mochawesome` - install `mochawesome` to export your tests results as fancy html files


### Benchmarking Suite

_Benchmark Testing with [Benchmark.js](https://github.com/bestiejs/benchmark.js)_

- `npm install --save-dev benchmark microtime` - install `benchmark` and `microtime` for performance testing


### Debugging

At the moment of writing Node.js Version 6x is sadly not working with [node-inspector/](https://github.com/node-inspector/node-inspector/). in current Version 0.12.8. Its a known issue i reported [here](https://github.com/node-inspector/node-inspector/issues/905#issuecomment-246203881). Hopefully when you read this its fixed for Node Version 6x and you can install [babel-node-debug](https://github.com/crabdude/babel-node-debug) for debugging ... (no known issues for users with Node Version 4x and 5x).

- `npm install --save-dev babel-node-debug`

In case everything works fine you can change the line in your package.json

from:

- `"debug": "nodemon $2 --exec babel-node --debug",`

to:

- `"debug": "babel-node-debug $2",`

and run it via `npm run debug src` for a damn sweet debugging experience.


### Security & Updates

_Run vulnerability tests via node security platform and check dependencies for updates_

- `npm install --save-dev nsp` - install node security platform command-line tool [nsp](https://github.com/nodesecurity/nsp)
- `npm install --save-dev npm-check-updates` - install [ncu](https://github.com/tjunnone/npm-check-updates) to check for the latest versions of the dependencies


### gimme some more

For more packages have a look at the <https://github.com/babel/babel/tree/master/packages> or read more about this topic on <https://babeljs.io/docs/plugins/#presets>


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

I added to `npm start` and `npm run debug` a argument ($2) to pass the location of the file. This allows you to quickly switch between different files without changing package.json.

Examples:

In case you want to run `./src/index.js` you can pass `npm start src` without the need of index.js. To run `./src/app1.js` run `npm start src/app1` and so on ...


### Commitizen

`npm install commitizen -g` - Installation

`commitizen init cz-conventional-changelog --save-dev --save-exact` - Setup

Badge:  

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

`[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)`


## Releasing with Standard-Version

`npm i --save-dev standard-version` - Installation as Dev Dependency

`npm i -g standard-version` - or as global Installation

`commitizen init standard-changelog --save-dev --save-exact` - Setup

`"release": "standard-version"` - add run script to `package.json`

`"release": "standard-version --sign"` - if you use GPG for signing add `--sign`

`npm run release --first-release` - first release

`npm run release` - further releases

Badge:  

[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

`[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)`


### Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)


### License

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)