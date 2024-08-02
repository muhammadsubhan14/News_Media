const express = require("express");
const Controller = require("../controllers/controller");
const authentication = require("../middlewares/authentication");
const news = express.Router();

// news.get("/news", authentication, Controller.getAllNews);
// news.get("/news/:id", authentication, Controller.getNewsById);
// news.post("/news", authentication, Controller.createNews);
// news.delete("/news/:id", authentication, Controller.deleteNews);

news.get("/news", Controller.getAllNews);
news.get("/news/:id", Controller.getNewsById);
news.post("/news", Controller.createNews);
news.delete("/news/:id", Controller.deleteNews);


module.exports = news;
