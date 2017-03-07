![Node Developer Boilerplate](https://github.frapsoft.com/top/babel-es7.jpg?v=101)

# Node Developer Boilerplate

[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=100)](https://github.com/ellerbrock/javascript-badges/) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/ellerbrock/javascript-badges/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badges/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)

_Node / yarn Boilerplate with Babel ES6 / ES7 Support, Testing, CI Integration, Code Coverage, JS Standard Style, Commit Guidelines, Git Hooks, Security Checks, Automatic Semantic Versioning, Benchmarking, Debugging, Monitoring, Source Map Generation, Auto Reload, Linting and more cool stuff ..._

## Project Status

[![Build Status](https://travis-ci.org/ellerbrock/node-developer-boilerplate.svg?branch=master)](https://travis-ci.org/ellerbrock/node-developer-boilerplate) [![codecov](https://codecov.io/gh/ellerbrock/node-developer-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/ellerbrock/node-developer-boilerplate) ![dependencies](https://david-dm.org/ellerbrock/node-developer-boilerplate.svg)

## Features

- Node optimized ES6 / ES7 Transpilation and Source Maps with [Babel](https://github.com/babel/babel)
- ES6+ aware Code Minification based on the Babel toolchain [babili](https://github.com/babel/babili)
- Restart Node on Application Changes with [nodemon](https://github.com/remy/nodemon)
- Code Debugging with [babel-node-debug](https://github.com/crabdude/babel-node-debug)
- Node Server Performance Monitoring with [nodejs-dashboard](https://github.com/FormidableLabs/nodejs-dashboard)
- Javascript Linting with [ESLint](https://github.com/eslint/eslint)
- Javascript Code Style [Standard](https://github.com/feross/standard)
- Javascript Style Linting via [eslint-config-standard](https://github.com/feross/eslint-config-standard)
- Automatic Semantic Releasing with [standard-version](https://github.com/conventional-changelog/standard-version)
- Code Benchmark Testing with [benchmark.js](https://github.com/bestiejs/benchmark.js)
- Vulnerability scan via [snyk](https://github.com/Snyk/snyk)
- ES6+ Testing via [babel-register](https://github.com/babel/babel/tree/master/packages/babel-register) with [Mocha](https://github.com/mochajs/mocha), [Chai](https://github.com/chaijs/chai), [Sinon](https://github.com/sinonjs/sinon) and [sinon-chai](https://github.com/domenic/sinon-chai)
- Generate HTML Reports from tests via [mochawesome](https://github.com/adamgruber/mochawesome)
- ES6+ Code Coverage with [babel-istanbul](https://github.com/jmcriffey/babel-istanbul)
- Ready for Continuous Integration & Delivery with [travis-ci](https://travis-ci.org)
- Use Standard Conventional Commit Messages via [commitizen](https://github.com/commitizen/cz-cli)
- Commitizen Emoji Support for [cz-conventional-changelog-emoji](https://github.com/ellerbrock/cz-conventional-changelog-emoji)
- Automatic generate Changelog with Emoji Support [conventional-changelog-angular-emoji](https://github.com/ellerbrock/conventional-changelog-angular-emoji)
- Lint Commit Messages via [conventional-changelog-lint](https://github.com/marionebl/conventional-changelog-lint)
- Lint Markdown files with [markdownlint](https://github.com/DavidAnson/markdownlint)
- Check if links in Markdown are online via [markdown-link-check](https://github.com/tcort/markdown-link-check)
- Lint .travis.yml with [travis-lint](https://github.com/pwmckenna/node-travis-lint)
- Slack & Email Notifications for Builds via [travis-ci](https://docs.travis-ci.com/user/notifications)
- Task Runner CLI via [ntl](https://github.com/ruyadorno/ntl)
- npm scripts to get quick up and running

## External Services

*all used services are free to use for open source projects and quick registration via github authentication*

- [github](https://github.com/) - Modern Version Control System
- [npmjs](https://www.npmjs.com/) - Javascript Package Registry (optional: only if you want to publish to the npm registry)
- [travis-ci](https://travis-ci.org) - Continuous Integration & Delivery
- [codecov.io](https://codecov.io/) - Code Coverage
- [snyk.io](https://snyk.io) - Fix and prevent known vulnerabilities in dependencies
- [greenkeeper.io](https://greenkeeper.io) - Automated Dependency Management

In case you have to pass some secure token to Travis-CI i recommend the [travis-cli](https://github.com/travis-ci/travis.rb) tool for decryption and lots of other features. You can read more about it [here](https://docs.travis-ci.com/user/encryption-keys/). Linux / OS X Installation via `sudo gem install travis`. You can also set Token on GitHub in the Repository Settings.

![unicorn](http://i.giphy.com/3o85xBO5Rt4031bH44.gif)

## Quickstart (npm)

```bash
git clone https://github.com/ellerbrock/node-developer-boilerplate
cd node-developer-boilerplate
npm install
```

## Quickstart (yarn)

```bash
git clone https://github.com/ellerbrock/node-developer-boilerplate
cd node-developer-boilerplate
yarn
```

### ECMAScript 2015 / ES6

[Node.js](https://github.com/nodejs/node) comes with a huge set of ES6 features out of the box. A detailed list of supported features can be found at <http://node.green>. To speed things up and avoid transpiling natively supported features i recommend to install only the missing parts in your current Node Version:

- `npm install --save-dev babel-preset-es2015-node6` - Node.js Version 6x
- `npm install --save-dev babel-preset-es2015-node5` - Node.js Version 5x
- `npm install --save-dev babel-preset-es2015-node4` - Node.js Version 4x
- `npm install --save-dev babel-preset-es2015` - for all Node.js Versions

### Info

At the moment im busy working on this boilerplate and lot stuff is changing.  
When things getting more stable i will bump the version to 1.0.0 and write a detailed documentation.  

### Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)
[![Docker](https://github.frapsoft.com/social/docker.png)](https://hub.docker.com/u/frapsoft/)
[![npm](https://github.frapsoft.com/social/npm.png)](https://www.npmjs.com/~ellerbrock)
[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)
[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)
[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)
[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)

### License

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)
