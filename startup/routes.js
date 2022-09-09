const main = require("../routes/main.js");
const login = require("../routes/login.js");
const register = require("../routes/register.js");

const express = require("express");
engine = require("ejs-mate");

module.exports = function(app) {

  app.engine("ejs", engine);
  app.set("views", __dirname + "../../views/pages");
  app.set("view engine", "ejs");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(main);
  app.use(login);
  app.use(register);
};
