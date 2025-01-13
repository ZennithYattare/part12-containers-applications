/** @format */

module.exports = {
	env: {
		node: true,
		commonjs: true,
		es2021: true,
		jest: true,
	},
	extends: "eslint:recommended",
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": 0,
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-trailing-spaces": "error",
		"object-curly-spacing": ["error", "always"],
		"arrow-spacing": ["error", { before: true, after: true }],
		"no-console": 0,
	},
};
