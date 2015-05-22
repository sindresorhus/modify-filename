# modify-filename [![Build Status](https://travis-ci.org/sindresorhus/modify-filename.svg?branch=master)](https://travis-ci.org/sindresorhus/modify-filename)

> Modify the filename in a path


## Install

```
$ npm install --save modify-filename
```


## Usage

```js
var modifyFilename = require('modify-filename');

modifyFilename('src/unicorn.png', function (filename, extension) {
	return filename + '-rainbow' + extension;
});
//=> 'src/unicorn-rainbow.png'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
