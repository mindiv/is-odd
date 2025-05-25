export function isDivisibleBy(n: number, divisor: number): boolean {
  if (divisor === 0) throw new Error("Cannot divide by zero");
  return n % divisor === 0;
}
