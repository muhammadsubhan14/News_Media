const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const newsRouter = require("./news");

router.use(userRouter);
router.use(newsRouter)

module.exports = router;
