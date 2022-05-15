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
  {
    username: "blakelake",
    password: "bl1234",
    email: "blake@gmail.com"
  },
  {
    username: "katiespells",
    password: "kspells",
    email: "kspells23@gmail.com"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;