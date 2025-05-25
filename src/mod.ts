export function mod(n: number, m: number): number {
  if (m === 0) throw new Error("Cannot mod by zero");
  return ((n % m) + m) % m;
}
