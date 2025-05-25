/**
 * Restricts a number to be within the inclusive range [min, max].
 *
 * @param n - The number to clamp.
 * @param min - Lower bound.
 * @param max - Upper bound.
 * @returns `min` if `n < min`, `max` if `n > max`, else `n`.
 * @throws Error if `min` > `max`.
 *
 * @example
 * clamp(5, 1, 10);    // 5
 * clamp(-1, 0, 100);  // 0
 * clamp(200, 0, 100); // 100
 */
export function clamp(n: number, min: number, max: number): number {
  if (min > max) {
    throw new Error("min cannot be greater than max");
  }
  return Math.max(min, Math.min(max, n));
}
