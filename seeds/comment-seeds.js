const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment_text: "Love seeing updates on this!"
  },
  {
    user_id: 1,
    post_id: 1,
    comment_text:
      "Thank you for posting!"
  },
  {
    user_id: 3,
    post_id: 3,
    comment_text: "I agree 100%"
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "Wow, this is outstanding!"
},
{
    user_id: 2,
    post_id: 2,
    comment_text: "It was an honor being part of this hardoworking team!"
},
{
    user_id: 5,
    post_id: 5,
    comment_text: "Impressive! Great job!!"
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;