import { smallNumberSubstraction, substraction } from "../modules/substraction";
import { expect, describe, it } from "vitest";

describe("smallNumberSubstraction", () => {
  it("should return 4 when a = 9 & b = 5", () => {
    expect(smallNumberSubstraction(9, 5)).toBe(4);
  });

  it("should throw an error when a is inferior than b", () => {
    expect(() => smallNumberSubstraction(3, 5)).toThrow(
      "sorry you can't substract to get a negative result"
    );
  });

  it("should throw an error when the difference between a and b is superior to 9", () => {
    expect(() => smallNumberSubstraction(16, 4)).toThrow(
      "you are cheating tring to substract big numbers here"
    );
  });

  it("should return an addition (a+b) when b is negative", () => {
    expect(smallNumberSubstraction(3, -1)).toBe(4);
  });
});

describe("substraction", () => {
  it("should return the correct result when a > b", () => {
    expect(substraction(10, 5)).toBe(5);
  });

  it("should return 0 when a = b", () => {
    expect(substraction(5, 5)).toBe(0);
  });

  it("should return a when b = 0", () => {
    expect(substraction(10, 0)).toBe(10);
  });

  it("should return b when a = 0", () => {
    expect(substraction(0, 5)).toBe(-5);
  });

  it("should handle negative b correctly (a - (-b) = a + b)", () => {
    expect(substraction(16, -5)).toBe(21);
  });

  it("should handle negative a correctly", () => {
    expect(() => substraction(3, 5)).toThrow(
      "sorry you can't substract to get a negative result"
    );
  });

  it("should handle both a and b negative", () => {
    expect(() => substraction(3, 5)).toThrow(
      "sorry you can't substract to get a negative result"
    );
  });

  it("should throw an error when trying to subtract a smaller digit from a larger digit (smallNumberSubstraction rule)", () => {
    expect(() => substraction(3, 5)).toThrow(
      "sorry you can't substract to get a negative result"
    );
  });

  it("should handle multi-digit subtraction without carry", () => {
    expect(substraction(21, 10)).toBe(11);
  });

  it("should handle multi-digit subtraction with carry", () => {
    expect(substraction(100, 85)).toBe(15);
  });

  it("should handle subtraction resulting in 0", () => {
    expect(substraction(123, 123)).toBe(0);
  });

  it("should handle subtraction with carry across multiple digits", () => {
    expect(substraction(1000, 999)).toBe(1);
  });
});
