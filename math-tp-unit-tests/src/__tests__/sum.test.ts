import { sumSmallNumbers, sum } from "../modules/sum";
import { expect, describe, it } from "vitest";

// describe("sumSmallNumbers", () => {
//   it("should return 2 when 1 + 1", () => {
//     expect(sumSmallNumbers(1, 1)).toBe(2);
//   });

//   it("should throw an error when a is negative", () => {
//     expect(() => sumSmallNumbers(-1, 1)).toThrow(
//       "Les nombres doivent être positifs"
//     );
//   });

//   it("should throw an error when b is negative", () => {
//     expect(() => sumSmallNumbers(1, -1)).toThrow(
//       "Les nombres doivent être positifs"
//     );
//   });

//   it("should throw an error when a is greater than 9", () => {
//     expect(() => sumSmallNumbers(10, 1)).toThrow(
//       "Les nombres doivent être inférieurs à 10"
//     );
//   });

//   it("should throw an error when b is greater than 9", () => {
//     expect(() => sumSmallNumbers(1, 10)).toThrow(
//       "Les nombres doivent être inférieurs à 10"
//     );
//   });
// });

describe("sum", () => {
  it("should return 2 when 1 + 1", () => {
    expect(sum(1, 1)).toBe(2);
  });

  it("should return 21 when 11 + 10", () => {
    expect(sum(11, 10)).toBe(21);
  });

  it("should throw an error when a is negative", () => {
    expect(() => sum(-1, 1)).toThrow("Les nombres doivent être positifs");
  });

  it("should throw an error when b is negative", () => {
    expect(() => sum(1, -1)).toThrow("Les nombres doivent être positifs");
  });

});
