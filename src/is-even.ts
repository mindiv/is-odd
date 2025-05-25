import { isOdd } from "./is-odd";

export function idEven(n: number | bigint): boolean {
  return !isOdd(n);
}
