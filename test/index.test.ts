import { describe, it, expect } from "vitest";
import { isOdd } from "../src";

describe("isOdd", () => {
  it("returns true for odd numbers", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });

  it("returns false for even numbers", () => {
    expect(isOdd(2)).toBe(false);
  });

  it("throws error for non-integers", () => {
    expect(() => isOdd(1.5)).toThrow();
  });
});
