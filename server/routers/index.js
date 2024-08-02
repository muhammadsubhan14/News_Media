const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const newsRouter = require("./news");
// const authentication = require("../middlewares/authentication");

router.use(userRouter);

// router.use(authentication)  
router.use(newsRouter)

module.exports = router;
