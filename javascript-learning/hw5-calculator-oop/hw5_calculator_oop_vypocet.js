import { Calculator } from "./hw5_calculator_oop.js";

const calc = new Calculator();

console.log("Sečíst 14 + 41=", calc.add(14, 41));
console.log("Odečíst 174 - 32=", calc.subtract(174, 32));
console.log("Násobit 47 * 50=", calc.multiple(47, 50));
console.log("Dělit 125 / 7=", calc.divide(125, 7));
