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
const NewsService = grpc.loadPackageDefinition(packageDefinition).NewsService;

const client = new NewsService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

module.exports = client;
