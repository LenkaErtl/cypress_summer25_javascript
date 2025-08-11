export class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiple(a, b) {
    return a * b;
  }
  divide(a, b) {
    return b !== 0 ? a / b : "Nelze dělit nulou";
  }
}
