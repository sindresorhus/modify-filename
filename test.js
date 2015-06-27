'use strict';
var test = require('ava');
var modifyFilename = require('./');

test(function (t) {
	t.assert(modifyFilename('src/unicorn.png', function (filename, ext) {
		return filename + '-rainbow' + ext;
	}) === 'src/unicorn-rainbow.png');

	t.assert(modifyFilename(['src/unicorn.png', 'src/pony.png'], function (filename, ext) {
		return filename + '-rainbow' + ext;
	})[1] === 'src/pony-rainbow.png');

	t.end();
});
