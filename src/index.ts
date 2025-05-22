export function isOdd(n: number): boolean {
  if (!Number.isInteger(n)) {
    throw new Error("Only integers are allowed");
  }
  return Math.abs(n % 2) === 1;
}
