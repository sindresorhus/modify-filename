import test from 'ava';
import fn from './';

test(t => {
	t.is(
		fn('src/unicorn.png', (filename, ext) => `${filename}-rainbow${ext}`),
		'src/unicorn-rainbow.png'
	);

	t.is(
		fn(['src/unicorn.png', 'src/pony.png'], (filename, ext) => `${filename}-rainbow${ext}`)[1],
		'src/pony-rainbow.png'
	);
});
