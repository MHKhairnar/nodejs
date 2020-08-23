class Person {
  constructor() {
    console.log("i am constructor");
  }
  getaddress() {
    return "Nashik";
  }

  getname() {
    return "i am mahesh";
  }
  getdetail() {
    const name = this.getaddress();
    const address = this.getname();

    return name + " " + address;
  }

  static main() {
    let P = new Person();
    const detail = P.getdetail();
    console.log(detail);
  }
}

Person.main();
