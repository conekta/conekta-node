module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: [
      "ts",
      "js"
  ],
  testMatch: [
    "**/__tests__/**/*.spec.ts"
 ],
  roots: ['<rootDir>'],
  transform: {
      '^.+\\.ts$': 'ts-jest'
  }
};