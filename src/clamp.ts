export function clamp(n: number, min: number, max: number): number {
  if (min > max) {
    throw new Error("min cannot be greater than max");
  }
  return Math.max(min, Math.min(max, n));
}
