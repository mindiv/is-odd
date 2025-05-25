import { isOdd } from "./is-odd";

/**
 * Checks whether a given integer or bigint is even.
 *
 * @param n - The number or bigint to test.
 * @returns `true` if `n` is even; otherwise `false`.
 *
 * @example
 * isEven(4);       // true
 * isEven(-3n);     // false
 */
export function isEven(n: number | bigint): boolean {
  // simply the inverse of isOdd
  return !isOdd(n);
}
