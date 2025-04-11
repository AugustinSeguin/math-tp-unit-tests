export function sumSmallNumbers(a: number, b: number) {
  if (a > 9 || b > 9) {
    throw new Error("Les nombres doivent être inférieurs à 10");
  }
  if (a < 0 || b < 0) {
    throw new Error("Les nombres doivent être positifs");
  }
  return a + b;
}

export function sum(a: number, b: number) {
  if (a < 10 || b < 10) {
    return sumSmallNumbers(a, b);
  }
  return a + b;
}
