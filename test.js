const client = require("./client");

client.getAllNews({}, (error, news) => {
  if (error) {
    console.error(error);
  }
  console.log(news);
});

client.getNews({ id: 1 }, (error, news) => {
  if (error) {
    console.error(error);
  }
  console.log(news);
});

client.addNews(
  { title: "Title", body: "Body", postImage: "Post Image" },
  (error, news) => {
    if (error) throw error;
    console.log(news);
  }
);

client.editNews(
  { id: "1", title: "Title", body: "Body", postImage: "Post Image" },
  (error, news) => {
    if (error) throw error;
    console.log(news);
  }
);

client.deleteNews({ id: 2 }, (error, news) => {
  if (error) {
    console.error(error);
  }
  console.log(news);
});
