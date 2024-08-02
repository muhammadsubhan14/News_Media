"use strict";
const fs = require("fs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let news = JSON.parse(fs.readFileSync("./data/news.json", "utf8")).map(
      (el) => {
        el.createdAt = el.updatedAt = new Date();
        return el;
      }
    );
    await queryInterface.bulkInsert("News", news, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("News", null, {});
  },
};
