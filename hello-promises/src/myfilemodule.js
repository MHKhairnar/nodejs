const fs = require("fs");

let readDemo = () => {
  const filePath = "F:/hello-promises/src/mahesh.txt";

  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    console.log(data);
  });
};
