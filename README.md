# am-i-a-dependency

> Check if the package is being installed by another package

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]
[![next-update-travis badge][nut-badge]][nut-readme]

## Problem

Often you want to run a post install script that does something. Yet, this
`postinstall` script will run *even in the module itself*. Thus we need a
simple way to determine if we are installing our dependencies or installing
the current module as a dependency of some other module. This can be
explained by a difference in commands below

```
npm i      -> we are installing our dependencies
npm i foo  -> module "foo" is being installed as a dependency
```

If module `foo` has a `postinstall` script, it can use this module
`am-i-a-dependency` to determine if it should be executed.

## Install

Requires [Node](https://nodejs.org/en/) version 4 or above.

```sh
npm install --save am-i-a-dependency
```
## Use

Imagine a `postinstall` script

```json
{
  "scripts": {
    "postinstall": "node something.js"
  }
}
```

Then inside `something.js` we can check

```js
// something.js
const amDependency = require('am-i-a-dependency')()
if (amDependency) {
  // yes, do something interesting
  // someone is executing "npm install foo"
} else {
  // we are inside "foo" itself, so nothing to do
}
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/am-i-a-dependency/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/am-i-a-dependency.svg?downloads=true
[npm-url]: https://npmjs.org/package/am-i-a-dependency
[ci-image]: https://travis-ci.org/bahmutov/am-i-a-dependency.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/am-i-a-dependency
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[nut-badge]: https://img.shields.io/badge/next--update--travis-monthly-green.svg
[nut-readme]: https://github.com/bahmutov/next-update-travis#readme
