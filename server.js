// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
let ejs = require("ejs");

// we"ve started you off with Express,
// but feel free to use whatever libs or frameworks you"d like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("dashboard/public"));

try {
  require("./bot.js");
} catch (err) {
  console.error("Unable to load bot.js \n", err);
  process.exit(1);
}
