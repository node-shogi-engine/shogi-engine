import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/__test__/**/*.test.ts"],
  testEnvironment: "node",
};

export default config;
