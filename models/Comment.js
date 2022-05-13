
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment_text: DataTypes.STRING,
    post_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    created_at: DataTypes.STRING
  },
  {
    sequelize
  }
);
module.exports = Comment;