const PROTO_PATH = "./news.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
// Load proto file for package defination
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
// load package definition to grpc server
const newsProto = grpc.loadPackageDefinition(packageDefinition);

// dummy news list
let news = [
  { id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" },
  { id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2" },
];
// Get all news
function getAllNews(_, callback) {
  console.log(news);
  callback(null, news);
}
// Add news
function addNews(call, callback) {
  const _news = { ...call.request, id: `${Date.now()}` };
  news.push(_news);
  callback(null, _news);
}
// Delete news
function deleteNews(call, callback) {
  const newsId = call.request.id;
  news = news.filter(({ id }) => id !== newsId);
  console.log(news);
  callback(null, {});
}
// Edit news
function editNews(call, callback) {
  const newsId = call.request.id;
  const newsItem = news.find(({ id }) => newsId == id);
  newsItem.title = call.request.title;
  newsItem.body = call.request.body;
  newsItem.postImage = call.request.postImage;
  console.log(news);
  callback(null, newsItem);
}
// Get news
function getNews(call, callback) {
  const newsId = call.request.id;
  const newsItem = news.find(({ id }) => newsId == id);
  callback(null, newsItem);
}

function main() {
  // create grpc server
  const server = new grpc.Server();
  // add service to grpc server
  server.addService(newsProto.NewsService.service, {
    getAllNews: getAllNews,
    addNews: addNews,
    deleteNews: deleteNews,
    editNews: editNews,
    getNews: getNews,
  });
  // start server
  server.bindAsync(
    "localhost:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log("Server is running at http://127.0.0.1:50051");
      server.start();
    }
  );
}

main();
