const promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readdatabase = async () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7709569692",
    database: "user",
  });
  await connection.connectAsync();

  console.log("connection sucessful");
  connection.end();
};

readdatabase();
