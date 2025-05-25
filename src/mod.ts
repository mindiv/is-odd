/**
 * Computes the mathematical modulus, always returning a non-negative result.
 *
 * @param n - The dividend.
 * @param m - The modulus (must not be zero).
 * @returns A value in [0, m).
 * @throws Error if `m` is zero.
 *
 * @example
 * mod(7, 5);    // 2
 * mod(-3, 5);   // 2  (because -3 mod 5 = 2)
 */
export function mod(n: number, m: number): number {
  if (m === 0) throw new Error("Cannot mod by zero");
  return ((n % m) + m) % m;
}
