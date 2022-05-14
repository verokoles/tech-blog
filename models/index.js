// import all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


Post.hasMany(Comment, {
  foreignKey: 'postId'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'SET NULL'
});


User.hasMany(Comment, {
foreignKey: 'user_id',
onDelete: 'SET NULL'

});



User.hasMany(Post, {
  foreignKey: 'user_id',
});



module.exports = {
  User,
  Comment,
  Post
};

