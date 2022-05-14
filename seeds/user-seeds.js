const { User } = require("../models");

const userData = [
  {
    username: "Verver",
    password: "verkoles",
    email: "verokoles88@gmail.com"
  },
  {
    username: "Tommy",
    password: "Hill",
    email: "thill@gmail.com"
  },
  {
    username: "JohnnyBoy",
    password: "whistles",
    email: "johnnybcode@gmail.com"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;