import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.spec.ts"],
  testEnvironment: "node",
};

export default config;
