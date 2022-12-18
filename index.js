const fs = require("fs");
const http = require("http");

const delay = (ms) => {
  return new Promise((rev, rej) => {
    setTimeout(() => {
      rev();
    }, ms);
  });
};

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, async (e, data) => {
      if (e) reject(e);
      else resolve(data);
    });
  });
};

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      try {
        // await delay(3000);
        const data = await readFile("index.html");
        res.write(data);
        res.end();
      } catch (err) {
        res.write("err = ");
      }
      break;
    default:
      res.write("404");
      res.end();
  }
});
server.listen(3000);
