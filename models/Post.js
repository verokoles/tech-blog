const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    post_url: DataTypes.STRING,
    created_at: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Post;
