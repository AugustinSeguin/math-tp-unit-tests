export function power(a: number, b: number): number {
  if (b === 0) {
    return 1;
  }
  if (b === 1) {
    return a;
  }
  if (a === 1) {
    return 1;
  }
  if (a === 0) {
    return 0;
  }

  let result = 1;
  const isNegativeExponent = b < 0;
  b = Math.abs(b);
  for (let i = 0; i < b; i++) {
    result *= a;
  }

  return isNegativeExponent ? 1 / result : result;
}
