export function multiplication(a: number, b: number): number {
  if (a === 0 || b === 0) {
    return 0;
  }

  const isNegative = a < 0 !== b < 0;
  a = Math.abs(a);
  b = Math.abs(b);

  let result = 0;

  for (let i = 0; i < b; i++) {
    result += a;
  }

  return isNegative ? -result : result;
}

export async function multiplicationWithDelay(
  a: number,
  b: number,
  delay: number
): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = multiplication(a, b);
      resolve(result);
    }, delay);
  });
}
