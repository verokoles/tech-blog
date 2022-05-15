const { Post } = require("../models");

const postData = [
  {
    title: "Coding Students See Hope",
    post_content:
      "As of 2021, in a quickly-expanding career field, the options for new graduates are endless. Many new graduates from coding bootcamps are finding jobs even before grad dates.",
    user_id: 1
  },
  {
    title:
      "The Top 10 Tech Trends In 2022 Everyone Must Be Ready For Now",
    post_content:
      "Computing power will continue to explode in 2022. We now have considerably better cloud infrastructure, and many businesses are re-platforming to the cloud.",
    user_id: 3
  },
  {
    title: "NoteTaker App now availible on App Store!",
    post_content:
      "Newly created note taking app by coding student in UTSA is now featured as a free applocation on the App Store for all Apple users. This app is practical for any form of lifestyle and work.",
    user_id: 4
  },
  {
    title: "'ZOOKEEPER' goes public!",
    post_content: "A newly built app by undergraduates has been made publicly available!",
    user_id: 5
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;