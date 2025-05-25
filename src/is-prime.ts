/**
 * Determines if a given integer greater than 1 is a prime number.
 *
 * @param n - The integer to test.
 * @returns `true` if `n` is prime; otherwise `false`.
 *
 * @example
 * isPrime(7);      // true
 * isPrime(12);     // false
 * isPrime(1);      // false
 */
export function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
