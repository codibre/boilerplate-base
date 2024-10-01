/** @type {import('jest').Config} */
module.exports = {
	moduleFileExtensions: ['js', 'json', 'ts'],
	testRegex: '.spec.ts$',
	transform: {
		'^.+\\.(t|j)s$': [
			'ts-jest',
			{
				before: ['node_modules/tsconfig-paths-hook/plugin'],
			},
		],
	},
	preset: 'ts-jest',
	coverageDirectory: './coverage',
	collectCoverageFrom: ['./src/**/*.ts'],
	testEnvironment: 'node',
	setupFilesAfterEnv: ['./test/jest-setup.ts'],
};
