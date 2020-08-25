console.log("hello mahesh");
const PI = require("./my-mod/my.module1");

const mod2 = require("./my-mod/my.module2");

const mod3 = require("./my-mod/my.module3");

const mod4 = require("./my-mod/my.module4");

// values from module 1
// console.log(PI);

// values from module 2
// console.log(mod2);
console.log(mod2.MY_APP_NAME);
console.log(mod2.MY_AREA);
console.log(mod2.PI);

// values form mod3

// console.log(mod3);
// values from module 4

console.log(mod4);
