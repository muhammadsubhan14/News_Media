const { verifyToken } = require("../helpers/jwt");
const { News } = require("../models");

const authentication = async (req, res) => {
  try {
    const access_token = req.headers.autorization;
    if (!access_token) throw { status: 401, msg: "Invalid Token" };
    const [type, token] = req.headers.authorization.split(" ");
    if (type !== "bearer") throw { status: 401, msg: "Invalid Token" };
    const payload = verifyToken(token);
    const user = await News.findByPk(payload.id);
    if (!user) throw { status: 401, msg: "Invalid Token" };
    req.user = user;
  } catch (error) {
    console.log(error);
    if (error.name === "InvalidToken" || error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "InvalidToken" });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = authentication;

