import { sum } from "./sum";

export function smallNumberSubstraction(a: number, b: number) {
  if (a < b) {
    throw new Error("sorry you can't substract to get a negative result");
  }

  const result = a - b;

  if (result < 0 || result > 9) {
    throw new Error("you are cheating tring to substract big numbers here");
  }

  return result;
}

export function substraction(a: number, b: number) {
  if (b < 0) {
    return sum(a, Math.abs(b));
  }

  if (a === 0 || a === -0) {
    return -b;
  }
  if (b === 0 || b === -0) {
    return a;
  }
  if (a < 10 && b < 10) {
    return smallNumberSubstraction(a, b);
  }

  let arrA = a.toString().split("").reverse().map(Number);
  let arrB = b.toString().split("").reverse().map(Number);
  let res = 0;
  let carry = 0;

  const maxLength = Math.max(arrA.length, arrB.length);

  for (let i = 0; i < maxLength; i++) {
    const digitA = arrA[i] || 0;
    const digitB = arrB[i] || 0;

    let sub = digitA - digitB + carry;

    if (sub < 0) {
      sub += 10;
      carry = -1;
    } else {
      carry = 0;
    }

    res += smallNumberSubstraction(sub, 0) * Math.pow(10, i);
  }

  return res;
}
