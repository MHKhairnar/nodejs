class calculator {
  add(n1, n2) {
    return n1 + n2;
  }
  sub(n1, n2) {
    return n1 - n2;
  }

  static main() {
    let obj = new calculator();
    let out = obj.add(1, 2);

    console.log(out);
  }
}
calculator.main();
