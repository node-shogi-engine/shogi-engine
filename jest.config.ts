import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  testEnvironment: "node",
};

export default config;
