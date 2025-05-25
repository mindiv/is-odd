export function isOdd(n: number | bigint): boolean {
  if (typeof n !== "number" && typeof n !== "bigint")
    throw new Error("Input must be a number or bigint");

  if (typeof n === "number" && !Number.isInteger(n))
    throw new Error("Number must be an integer");

  return BigInt(n) % 2n !== 0n;
}
