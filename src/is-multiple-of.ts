import { isDivisibleBy } from "./is-divisible-by";

export function isMultipleOf(n: number, base: number): boolean {
  return isDivisibleBy(n, base);
}
