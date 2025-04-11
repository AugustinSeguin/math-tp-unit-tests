import {
  multiplication,
  multiplicationWithDelay,
} from "../modules/multiplication";
import { expect, describe, it } from "vitest";

describe("multiplication", () => {
  it("should return 4 when 2 * 2", () => {
    expect(multiplication(2, 2)).toBe(4);
  });

  it("should return 0 when a = 0", () => {
    expect(multiplication(0, 2)).toBe(0);
  });

  it("should return 0 when b = 0", () => {
    expect(multiplication(2, 0)).toBe(0);
  });

  it("should return b when a = 1", () => {
    expect(multiplication(1, 2)).toBe(2);
  });

  it("should return a when b = 1", () => {
    expect(multiplication(2, 1)).toBe(2);
  });

  it("should return -36 when a = -6 & b = 6", () => {
    expect(multiplication(-6, 6)).toBe(-36);
  });

  it("should return 36 when a = -6 & b = -6", () => {
    expect(multiplication(-6, -6)).toBe(36);
  });

  it("should return -36 when a = 6 & b = -6", () => {
    expect(multiplication(6, -6)).toBe(-36);
  });
});

describe("multiplicationWithDelay", () => {
  it("should return the correct result after the delay", async () => {
    const result = await multiplicationWithDelay(6, 7, 100);
    expect(result).toBe(42);
  });

  it("should return 0 when one of the numbers is 0", async () => {
    const result = await multiplicationWithDelay(0, 7, 100);
    expect(result).toBe(0);
  });

  it("should handle negative numbers correctly", async () => {
    const result = await multiplicationWithDelay(-6, 7, 100);
    expect(result).toBe(-42);
  });

  it("should handle both negative numbers correctly", async () => {
    const result = await multiplicationWithDelay(-6, -7, 100);
    expect(result).toBe(42);
  });
  
  it("should execute within the specified delay", async () => {
    const start = performance.now();
    await multiplicationWithDelay(6, 7, 100);
    const end = performance.now();
    const executionTime = end - start;

    expect(executionTime).toBeLessThanOrEqual(100);
  });
});
