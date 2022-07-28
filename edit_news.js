const client = require("./client");

client.editNews(
  { id: "1", title: "Title", body: "Body", postImage: "Post Image" },
  (error, news) => {
    if (error) throw error;
    console.log(news);
  }
);
