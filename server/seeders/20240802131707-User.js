"use strict";
const fs = require("fs");
const { hashing } = require("../helpers/bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let user = JSON.parse(fs.readFileSync("./data/user.json", "utf8")).map(
      (el) => {
        el.createdAt = el.updatedAt = new Date();
        el.password = hashing(el.password);
        return el;
      }
    );
    await queryInterface.bulkInsert("Users", user, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
