/**
 * Checks if `n` is evenly divisible by `divisor`.
 *
 * @param n - The dividend.
 * @param divisor - The divisor (must not be zero).
 * @returns `true` if `n % divisor === 0`; otherwise `false`.
 * @throws Error if `divisor` is zero.
 *
 * @example
 * isDivisibleBy(10, 2);   // true
 * isDivisibleBy(10, 3);   // false
 */
export function isDivisibleBy(n: number, divisor: number): boolean {
  if (divisor === 0) throw new Error("Cannot divide by zero");
  return n % divisor === 0;
}
