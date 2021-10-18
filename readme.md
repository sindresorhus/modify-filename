# modify-filename

> Modify the filename in a path

## Install

```sh
npm install modify-filename
```

## Usage

```js
import modifyFilename from 'modify-filename';

modifyFilename('src/unicorn.png', (filename, extension) => {
	return `${filename}-rainbow${extension}`;
});
//=> 'src/unicorn-rainbow.png'

modifyFilename(['src/unicorn.png', 'src/pony.png'], (filename, extension) => {
	return `${filename}-rainbow${extension}`;
});
//=> ['src/unicorn-rainbow.png', 'src/pony-rainbow.png']
```
