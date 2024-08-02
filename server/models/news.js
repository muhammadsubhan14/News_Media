"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Name/Title is Required.`,
          },
          notNull: {
            msg: `Name/Title is Required.`,
          },
        },
      },
      imageUrl: DataTypes.STRING,
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Content is Required.`,
          },
          notNull: {
            msg: `Content is Required.`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "News",
    }
  );
  return News;
};
