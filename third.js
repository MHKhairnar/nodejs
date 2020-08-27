const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let hellodatabase = async () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7709569692",
    database: "user",
  });
  // connection open
  await connection.connectAsync(); //promise

  //let query//
  let sql = "select *from mahesh";
  let results = await connection.queryAsync(sql);
  console.log(results);
  connection.end();
};

hellodatabase();
