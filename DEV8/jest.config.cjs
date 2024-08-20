module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.mjs$": "babel-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "mjs"],
};
