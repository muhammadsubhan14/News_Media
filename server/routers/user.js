const express = require("express");
const Controller = require("../controllers/controller");
const user = express.Router();

user.post("/register", Controller.register);
user.post("/login", Controller.login);
user.get("/user/:id", Controller.userById);

module.exports = user;
