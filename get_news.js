const client = require("./client");

client.getAllNews({}, (error, news) => {
  if (error) {
    console.error(error);
  };
  console.log(news);
});
