import { describe, expect, it, spyOn } from "bun:test";
import sayHello from "sayHello";

describe("sayHello", () => {
  it('says hello', () => {
    const consoleSpy = spyOn(console, 'log');

    sayHello()

    expect(consoleSpy).toHaveBeenCalled()
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
});