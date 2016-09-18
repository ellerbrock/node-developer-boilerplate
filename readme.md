![Babel ES7 npm](https://github.frapsoft.com/top/babel-es7.jpg?v=101)

# Babel ES6 / ES7 npm Skeleton [![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=100)](https://github.com/ellerbrock/javascript-badges/) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/ellerbrock/javascript-badges/) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badges/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)

_Babel ES6 / ES7 npm Skeleton for the brave coders lifing on the edge_

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
- npm scripts to quickly run tasks

## Ready, steady, go ...

- `git init` - create a new git repository
- `npm init -y` - create a initial package.json
- `npm install --save-dev babel-cli nodemon eslint` - install development dependencies
- `eslint --init` - setup your ESLint Style (in my case JS Standard)

## ES6

Node.js comes already with a huge set of ES6 features. A detailed list of supported features can be found at <http://node.green>. To speed things up and avoid transpiling stuff which is already natively supported via Node i recommend only installing the missing features for your current Node Version:

- `npm install --save-dev babel-preset-es2015-node6` - Node.js Version 6x
- `npm install --save-dev babel-preset-es2015-node5` - Node.js Version 5x
- `npm install --save-dev babel-preset-es2015-node4` - Node.js Version 4x
- `npm install --save-dev babel-preset-es2015` - for all Node.js Versions

## ES7

`npm install --save-dev babel-preset-stage-0` - for ES7 Support

## ES6+ aware Minifier

_Lets minify our production stuff directly with Babel._

Repository: <https://github.com/babel/babili>

- `npm install --save-dev babili babel-preset-babili`

## Testing

_Testing with `Mocha` and `Chai`, HTML Reports via `mochawesome`_

- `npm install --save-dev babel-register` - install `babel-register` for on the fly compilation
- `npm install --save-dev mocha chai` - install `mocha` and `chai` for testing
- `npm install --save-dev mochawesome` - install `mochawesome` to export tests results as html files

**Info:**

_The tests and benchmark stuff not really makes sence for a module that does nothing more then return a + b without any further checks. Its just a simple demonstration how to use the frameworks and tools with minimal example code to get you quick up and running. For further learning and better integration for your needs you should read more in detail about that stuff on the project pages._

## Benchmarking Suite

_Benchmark Testing with `Benchmark.js`_

- `npm install --save-dev benchmark microtime` - install `benchmark` and `microtime` for performance testing

## Debugging

At the moment of writing Node.js Version 6x is sadly not working with `node-inspector` in current Version 0.12.8\. Its a known issue i reported [here](https://github.com/node-inspector/node-inspector/issues/905#issuecomment-246203881). Hopefully when you read this its fixed for Node Version 6x and you can install `babel-node-debug` for debugging ... (no known issues for users with Node Version 4x and 5x).

- `npm install --save-dev babel-node-debug`

In case everything works fine you can change the line in your package.json

from:

- `"debug": "nodemon $2 --exec babel-node --debug",`

to:

- `"debug": "babel-node-debug $2",`

and run it via `npm run debug src` for a damn sweet debugging experience.

## Security & Updates

_Run vulnerability tests via node security platform and update scans via `ncu`_

- `npm install --save-dev nsp` - install node security platform command-line tool `nsp`
- `npm install --save-dev npm-check-updates` - install `ncu` to check for the latest versions of the dependencies

## gimme some more

For more packages have a look at the <https://github.com/babel/babel/tree/master/packages> or read more about this topic on <https://babeljs.io/docs/plugins/#presets>

## package.json

To avoid messing around with separate config files like .babelrc, .eslintrc.json and so on we can put all that stuff directly in our package.json file:

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
  },
  "scripts": {
    "start": "nodemon $2 --exec babel-node",
    "debug": "nodemon $2 --exec babel-node --debug",
    "benchmark": "babel-node benchmark",
    "benchmark:watch": "nodemon $2 --exec babel-node benchmark",
    "lint": "eslint src",
    "lint:fix": "eslint --fix src",
    "build": "babel -s true src -d dist",
    "serve": "node dist/index.js",
    "test": "mocha -c -S -R spec 'tests' --compilers js:babel-register --check-leaks",
    "test:watch": "mocha -w -c -S -R spec 'tests' --compilers js:babel-register --check-leaks",
    "test:reporter-nyan": "mocha -c -S -R nyan 'tests' --compilers js:babel-register --check-leaks",
    "test:reporter-dot": "mocha -c -S -R dot 'tests' --compilers js:babel-register --check-leaks",
    "test:reporter-list": "mocha -c -S -R list 'tests' --compilers js:babel-register --check-leaks",
    "test:reporter-landing": "mocha -c -S -R landing 'tests' --compilers js:babel-register --check-leaks",
    "test:export": "mocha -S -R mochawesome 'tests' --compilers js:babel-register --reporter-options reportDir=reports --check-leaks",
    "scan:security": "nsp check",
    "scan:updates": "ncu"
  },
```

I added to `npm start` and `npm run debug` a argument ($2) to pass the location of the file. This allows you to quickly switch between different files without changing package.json.

Examples:

In case you want to run `./src/index.js` you can pass `npm start src` without the need of index.js. To run `./src/app1.js` run `npm start src/app1` and so on ...

## Lets run it!

- `npm start src` - execute code with life reload via `nodemon` transpiled with `babel-node`
- `npm run debug src` - execute code with debug flag enabled
- `npm run benchmark` - run benchmark tests with `benchmark.js`
- `npm run benchmark:watch` - run benchmark tests with `benchmark.js` and watch for file changes
- `npm run lint` - code linting with `eslint`
- `npm run lint:fix` - fix problems automatically with `eslint`
- `npm test` - run tests with `mocha` and `chai` with spec as reporter
- `npm run test:watch` - run tests with `mocha` and `chai` and watch for changes
- `npm run test:reporter-nyan` - run tests with `mocha` and `chai` with `nyan` reporter
- `npm run test:reporter-dot` - run tests with `mocha` and `chai` with `dot` reporter
- `npm run test:reporter-list` - run tests with `mocha` and `chai` with `list` reporter
- `npm run test:reporter-landing` - run tests with `mocha` and `chai` with `landing` reporter
- `npm run test:export` - export tests results as html files in the `./reports` folder via `mochasome`
- `npm run build` - transpile and minify ES6+ code and create sourcemaps with `babel` & `babili`
- `npm run server` - serve production files from the `./dist` folder via `node`
- `npm run scan:security` - run vulnerability tests via the node security platform `nsp`
- `npm run scan:updates` - check for latest versions of dependencies via `ncu`

### Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)

### Development by

Developer / Author: [Maik Ellerbrock](https://github.com/ellerbrock/)<br>
Company: [Frapsoft](https://github.com/frapsoft/)

### License

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)
