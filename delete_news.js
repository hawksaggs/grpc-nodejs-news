const client = require("./client");

client.deleteNews({ id: 2 }, (error, news) => {
  if (error) {
    console.error(error);
  }
  console.log(news);
});
