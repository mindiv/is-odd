import { isDivisibleBy } from "./is-divisible-by";

/**
 * Alias for isDivisibleBy, checks if `n` is a multiple of `base`.
 *
 * @param n - The number to test.
 * @param base - The base multiple.
 * @returns `true` if `n` is a multiple of `base`; otherwise `false`.
 *
 * @example
 * isMultipleOf(12, 3); // true
 * isMultipleOf(12, 5); // false
 */
export function isMultipleOf(n: number, base: number): boolean {
  return isDivisibleBy(n, base);
}
