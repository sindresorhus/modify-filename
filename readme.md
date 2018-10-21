# modify-filename [![Build Status](https://travis-ci.org/sindresorhus/modify-filename.svg?branch=master)](https://travis-ci.org/sindresorhus/modify-filename)

> Modify the filename in a path


## Install

```
$ npm install modify-filename
```


## Usage

```js
const modifyFilename = require('modify-filename');

modifyFilename('src/unicorn.png', (filename, extension) => {
	return `${filename}-rainbow${extension}`;
});
//=> 'src/unicorn-rainbow.png'

modifyFilename(['src/unicorn.png', 'src/pony.png'], (filename, extension) => {
	return `${filename}-rainbow${extension}`;
});
//=> ['src/unicorn-rainbow.png', 'src/pony-rainbow.png']
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
