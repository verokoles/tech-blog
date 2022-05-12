const { User } = require("../models");

const userData = [
  {
    username: "Verver",
    password: "verkoles",
  },
  {
    username: "Tommy",
    password: "Hill",
  },
  {
    username: "JohnnyBoy",
    password: "whistles",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;