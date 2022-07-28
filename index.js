const express = require("express");
const client = require("./client");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/news", (req, res) => {
  client.getAllNews({}, (error, news) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ error: true, message: error.message });
    }
    return res.json({ error: false, data: news });
  });
});

app.get("/news/:id", (req, res) => {
  const newsId = req.params.id;
  client.getNews({ id: newsId }, (error, news) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ error: true, message: error.message });
    }
    return res.json({ error: false, data: news });
  });
});

app.post("/news", (req, res) => {
  const body = req.body;
  client.addNews(body, (error, news) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ error: true, message: error.message });
    }
    return res.json({
      error: false,
      message: "Successfully created news",
      data: news,
    });
  });
});

app.put("/news/:id", (req, res) => {
  const newsId = req.params.id;
  const body = req.body;
  client.editNews({ id: newsId, ...body }, (error, news) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ error: true, message: error.message });
    }
    return res.json({
      error: false,
      message: "Successfully upudated news",
      data: news,
    });
  });
});

app.delete("/news/:id", (req, res) => {
  const newsId = req.params.id;
  client.editNews({ id: newsId }, (error, news) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ error: true, message: error.message });
    }
    return res.json({
      error: false,
      message: "Successfully deleted news",
      data: news,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
