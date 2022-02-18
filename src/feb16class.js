// Command to run this file: node src/feb16class.js

/**
 * Class Parent - The one used for inheriting
 */
class Parent {
  // #secret;
  constructor(secret) {
    // this.#secret = _secret;
    this._secret = secret;
  }

  get getSecret() {
    // return this.#secret;
    return this._secret;
  }

  sayName() {
    console.log("I am the parent");
  }
}

class Child extends Parent {
  accessSecret() {
    console.log("Can i access? ", this.getSecret);
  }

  sayName() {
    console.log("I am the parent");
  }
}

const p = new Child();
const q = new Parent();

console.log("sayName child");
p.sayName();
console.log("sayName parent");
q.sayName();
