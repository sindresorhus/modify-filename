import test from 'ava';
import modifyFilename from './index.js';

test('main', t => {
	t.is(
		modifyFilename('src/unicorn.png', (filename, fileExtension) => `${filename}-rainbow${fileExtension}`),
		'src/unicorn-rainbow.png',
	);

	t.is(
		modifyFilename(['src/unicorn.png', 'src/pony.png'], (filename, fileExtension) => `${filename}-rainbow${fileExtension}`)[1],
		'src/pony-rainbow.png',
	);

	t.is(
		modifyFilename('foo.min.js', (filename, fileExtension) => `${filename}-rainbow${fileExtension}`),
		'foo.min-rainbow.js',
	);
});
