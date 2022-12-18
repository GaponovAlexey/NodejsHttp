const http = require("http")

const server = http.createServer((req, res) => {
  res.write("bd")
  res.end()
})
server.listen(3000)