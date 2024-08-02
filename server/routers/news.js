const express = require("express");
const Controller = require("../controllers/controller");
const news = express.Router();

news.get("/news", Controller.getAllNews);
news.get("/news/:id", Controller.getNewsById);
news.post("/news", Controller.createNews);
news.delete("/news/:id", Controller.deleteNews);

module.exports = news