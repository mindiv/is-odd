#!/usr/bin/env node
import { isOdd, isEven, isPrime } from "./dist/index.js";

const [,, command, ...args] = process.argv;

const usage = `
Usage:
  @mindiv/is-odd <command> <value> [extra]
Commands:
  is-odd <number>
  is-even <number>
  is-prime <number>
`;

if (!command || !args[0]) {
  console.log(usage);
  process.exit(1);
}

const val = Number(args[0]);

switch (command) {
  case "is-odd":
    console.log(isOdd(val));
    break;
  case "is-even":
    console.log(isEven(val));
    break;
  case "is-prime":
    console.log(isPrime(val));
    break;
  default:
    console.log("Unknown command\n", usage);
    process.exit(1);
}
