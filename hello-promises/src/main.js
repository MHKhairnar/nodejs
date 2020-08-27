let fs = require("fs");

let read = function () {
  let path = "F:/hello-promises/src/mahesh.txt";

  const file1 = fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("its error");
    }
    console.log(data);
  });
};

read();
