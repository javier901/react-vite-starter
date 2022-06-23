module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/mocks/**",
    ],
    coveragePathIgnorePatterns: [],
    testEnvironment: "jsdom",
    modulePaths: ["<rootDir>/src"],
    transform: {
      "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$|^.+\\.css$':
      '<rootDir>/config/jest/fileTransformer.js',
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    modulePaths: ["<rootDir>/src"],
    moduleNameMapper: {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    moduleFileExtensions: [
      // Place tsx and ts to beginning as suggestion from Jest team
      // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
      "tsx",
      "ts",
      "web.js",
      "js",
      "web.ts",
      "web.tsx",
      "json",
      "web.jsx",
      "jsx",
      "node",
    ],
    watchPlugins: [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname",
    ],
    resetMocks: true,
    setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"] 
  };