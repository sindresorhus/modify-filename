import path from 'node:path';

export default function modifyFilename(inputPath, modifier) {
	if (!inputPath || !modifier) {
		throw new Error('`path` and `modifier` required');
	}

	if (Array.isArray(inputPath)) {
		return inputPath.map(element => modifyFilename(element, modifier));
	}

	const fileExtension = path.extname(inputPath);
	return path.join(path.dirname(inputPath), modifier(path.basename(inputPath, fileExtension), fileExtension));
}
