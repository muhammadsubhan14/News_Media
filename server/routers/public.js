const express = require("express");
const Controller = require("../controllers/controller");
const public = express.Router();

public.use("/pub/news", Controller.pubNews);

module.exports = public;
