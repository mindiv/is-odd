/**
 * Checks whether a given integer or bigint is odd.
 *
 * @param n - The number or bigint to test.
 * @returns `true` if `n` is odd; otherwise `false`.
 * @throws Error if `n` is not an integer or bigint.
 *
 * @example
 * isOdd(3);        // true
 * isOdd(-4n);      // false
 * isOdd(2.5);      // throws Error
 */
export function isOdd(n: number | bigint): boolean {
  if (typeof n !== "number" && typeof n !== "bigint")
    throw new Error("Input must be a number or bigint");

  if (typeof n === "number" && !Number.isInteger(n))
    throw new Error("Number must be an integer");

  return BigInt(n) % 2n !== 0n;
}
