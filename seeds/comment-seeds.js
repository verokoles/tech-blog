const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Love seeing updates on this!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "Thank you for posting!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "I agree 100%",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;