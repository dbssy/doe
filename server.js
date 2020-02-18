const express = require('express');
const nunjucks = require('nunjucks');
const routes = require("./routes");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(routes);

nunjucks.configure("./", {
  express: server,
  noCache: true
});

server.listen(3000, () => {
  console.log("[Server]", "is running");
});