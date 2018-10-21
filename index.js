'use strict';
const path = require('path');

module.exports = function modifyFilename(pth, modifier) {
	if (!pth || !modifier) {
		throw new Error('`path` and `modifier` required');
	}

	if (Array.isArray(pth)) {
		return pth.map(el => modifyFilename(el, modifier));
	}

	const ext = path.extname(pth);
	return path.join(path.dirname(pth), modifier(path.basename(pth, ext), ext));
};
