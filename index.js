'use strict';
var path = require('path');

module.exports = function (pth, modifier) {
	if (arguments.length !== 2) {
		throw new Error('`path` and `modifier` required');
	}

	var ext = path.extname(pth);
	return path.join(path.dirname(pth), modifier(path.basename(pth, ext), ext));
};
