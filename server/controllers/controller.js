const { User, News } = require("../models");
const { compare } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { Op } = require("sequelize");

module.exports = class Controller {
  static async register(req, res) {
    try {
      const { name, telp, email, password } = req.body;
      const register = await User.create({
        name,
        telp,
        email,
        password,
      });

      res.status(201).json({
        message: "create user done",
        id: register.id,
        email: register.email,
      });
    } catch (error) {
      console.log(error.name);
      res.status(500).json({ message: error.message });
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      // console.log(req.body, "<<<<<<");
      if (!email) {
        throw { name: "EmailNull" };
      }
      if (!password) {
        throw { name: "PasswordNull" };
      }

      const user = await User.findOne({ where: { email } });
      // console.log(user, "<<user>>");

      if (!user) {
        throw { name: "InvalidLogin" };
      }

      const passwordValid = compare(password, user.password);
      // console.log(passwordValid, "<<<<<<");

      if (!passwordValid) {
        throw { name: "InvalidLogin" };
      }

      const payload = {
        id: user.id,
        email: user.email,
      };
      const access_token = signToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error.name);
      res.status(500).json({ message: error.message });
    }
  }
  static async getAllUser(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // news
  static async getAllNews(req, res) {
    try {
      const article = await News.findAll();
      res.status(200).json({ article });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getNewsById(req, res) {
    try {
      const { id } = req.params;
      const article = await News.findByPk(id);
      res.status(200).json({ article });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createNews(req, res) {
    try {
      const { name, imageUrl, content } = req.body;
      const article = await News.create({
        name,
        imageUrl,
        content,
      });
      res.status(201).json({ article });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteNews(req, res) {
    try {
      const { id } = req.params;
      const article = await News.destroy({ where: { id } });
      res.status(200).json({ article, message: "delete success" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //public

  static async pubNews(req, res) {
    try {
      const article = await News.findAll();
      res.status(200).json({ article });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
