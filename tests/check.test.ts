import { main } from "../src/index";

describe("first test", () => {
  it("main return '10'.", () => {
    expect(main()).toBe(10);
  });
});
