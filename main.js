const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readalluser = async () => {
  try {
    console.log("i am about to read database");

    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "7709569692",
      database: "user",
    });
    await connection.connectAsync();
    console.log("connection succesful");
  } catch (err) {
    console.log(err);
  }
};
readalluser();
