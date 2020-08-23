let Person = require("./person");
const person = require("./person");
class main {
  static main() {
    console.log("this is execution point");

    let p = new person();
    let output = p.getname();
    console.log(output);
  }
}

main.main();
