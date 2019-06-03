module.exports = {
  moduleFileExtensions: ["js", "svelte"],
  testMatch: ["**/tests/**/*.+(js)"],
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte"
  },
  transformIgnorePatterns: ["/node_modules/(?!svelte).+\\.js$"],
  moduleFileExtensions: ["js", "svelte"],
  verbose: true
};
