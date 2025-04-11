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
  if (a === 0 || a === -0) {
    return b;
  }
  if (b === 0 || b === -0) {
    return a;
  }
  if (a < 10 && b < 10) {
    return sumSmallNumbers(a, b);
  }
  if (a < 0 || b < 0) {
    throw new Error("Les nombres doivent être positifs");
  }

  let arrA = a.toString().split("").reverse().map(Number);
  let arrB = b.toString().split("").reverse().map(Number);
  let res = 0;
  let carry = 0;

  const maxLength = Math.max(arrA.length, arrB.length);

  for (let i = 0; i < maxLength; i++) {
    const digitA = arrA[i] || 0;
    const digitB = arrB[i] || 0;

    const sum = sumSmallNumbers(digitA, digitB + carry);

    carry = Math.floor(sum / 10);

    res += (sum % 10) * Math.pow(10, i);
  }

  if (carry > 0) {
    res += carry * Math.pow(10, maxLength);
  }

  return res;
}
