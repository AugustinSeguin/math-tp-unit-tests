import { sumSmallNumbers } from "../modules/sum";
import { expect, describe, it } from "vitest";

describe("sumSmallNumbers", () => {
  it("should return 2 when 1 + 1", () => {
    expect(sumSmallNumbers(1, 1)).toBe(2);
  });

  it("should throw an error when a is negative", () => {
    expect(() => sumSmallNumbers(-1, 1)).toThrow(
      "Les nombres doivent être positifs"
    );
  });

  it("should throw an error when b is negative", () => {
    expect(() => sumSmallNumbers(1, -1)).toThrow(
      "Les nombres doivent être positifs"
    );
  });

  it("should throw an error when a is greater than 9", () => {
    expect(() => sumSmallNumbers(10, 1)).toThrow(
      "Les nombres doivent être inférieurs à 10"
    );
  });

  it("should throw an error when b is greater than 9", () => {
    expect(() => sumSmallNumbers(1, 10)).toThrow(
      "Les nombres doivent être inférieurs à 10"
    );
  });
});
