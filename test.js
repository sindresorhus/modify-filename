import test from 'ava';
import modifyFilename from '.';

test('main', t => {
	t.is(
		modifyFilename('src/unicorn.png', (filename, ext) => `${filename}-rainbow${ext}`),
		'src/unicorn-rainbow.png'
	);

	t.is(
		modifyFilename(['src/unicorn.png', 'src/pony.png'], (filename, ext) => `${filename}-rainbow${ext}`)[1],
		'src/pony-rainbow.png'
	);
});
