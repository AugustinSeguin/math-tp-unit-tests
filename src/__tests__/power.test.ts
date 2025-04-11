import { power } from "../modules/power";
import { expect, describe, it } from "vitest";

describe("power: a & b => 0", () => {
  it("should return 4 when a^b for 2^2", () => {
    expect(power(2, 2)).toBe(4);
  });

  it("should return 1 when b=0", () => {
    expect(power(2, 0)).toBe(1);
  });

  it("should return a when b=1", () => {
    expect(power(2, 1)).toBe(2);
  });

  it("should return 1 when a=1", () => {
    expect(power(1, 3)).toBe(1);
  });

  it("should return 0 when a=0", () => {
    expect(power(0, 3)).toBe(0);
  });
});

describe("power: a or b < 0", () => {
  it("should return 1/4 when a = 2 and b = -2", () => {
    expect(power(2, -2)).toBe(1 / 4);
  });

  it("should return 1/4 when a = 2 and b = -1", () => {
    expect(power(2, -1)).toBe(0.5);
  });

  it("should return 1 when a = 2 and b = -0", () => {
    expect(power(2, -0)).toBe(1);
  });
});
