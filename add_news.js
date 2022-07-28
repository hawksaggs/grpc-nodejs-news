const client = require("./client");

client.addNews(
  { title: "Title", body: "Body", postImage: "Post Image" },
  (error, news) => {
    if (error) throw error;
    console.log(news);
  }
);
