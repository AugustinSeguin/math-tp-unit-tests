// import { sumSmallNumbers, sum } from "../modules/sum";
// import { expect, describe, it } from "vitest";

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

// describe("cas simple: comme sumSmallNumbers", () => {
//   it("should return 2 when 1 + 1", () => {
//     expect(sum(1, 1)).toBe(2);
//   });

//   it("should throw an error when a is negative", () => {
//     expect(() => sum(-1, 1)).toThrow("Les nombres doivent être positifs");
//   });

//   it("should throw an error when b is negative", () => {
//     expect(() => sum(1, -1)).toThrow("Les nombres doivent être positifs");
//   });
// });

// describe("cas vérification a & b", () => {
//   it("should return b when a = 0", () => {
//     expect(sum(0, 10)).toBe(10);
//   });

//   it("should return a when b = 0", () => {
//     expect(sum(10, 0)).toBe(10);
//   });

//   it("should return b when a = -0", () => {
//     expect(sum(0, 10)).toBe(10);
//   });

//   it("should return a when b = -0", () => {
//     expect(sum(10, 0)).toBe(10);
//   });

//   it("should return 21 when 19 + 16", () => {
//     expect(sum(19, 16)).toBe(35);
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

// });

// describe("cas avec retenue", () => {
//   it("should return 90 when 85 + 15 with a retenue (5+5=10)", () => {
//     expect(sum(85, 15)).toBe(100);
//   });

//   it("should return 35 when 19 + 16 with a retenue (9+6=15)", () => {
//     expect(sum(19, 16)).toBe(35);
//   });
// });

// describe("cas sans retenue", () => {
//   it("should return 21 when 10 + 11", () => {
//     expect(sum(10, 11)).toBe(21);
//   });
// });
