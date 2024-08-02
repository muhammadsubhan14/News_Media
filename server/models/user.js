"use strict";
const { Model } = require("sequelize");
const { hashing } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: `Name is Required.` } },
      },
      telp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: `Telp is Required.` } },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email already been used",
        },
        validate: {
          notEmpty: {
            msg: `Email is Required.`,
          },
          notNull: {
            msg: `Email is Required.`,
          },
          isEmail: {
            args: true,
            msg: "input must be email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Password is Required.`,
          },
          notNull: {
            msg: `Password is Required.`,
          },
          len: {
            args: [4],
            msg: "Minimal Password is 4 Characters.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    user.password = hashing(user.password);
  });
  return User;
};
