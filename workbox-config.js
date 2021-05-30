module.exports = {
	globDirectory: 'app/',
	globPatterns: [
		'**/*.{css,png,html,js,webmanifest}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'app/sw.js'
};