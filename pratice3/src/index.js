const http = require("http");

http
  .createServer((request, Response) => {
    // Response.end("hello world");
    let json = {
      title: "mahesh",
      id: "nashik",
    };
    Response.end(JSON.stringify(json));
  })
  .listen(5500);
