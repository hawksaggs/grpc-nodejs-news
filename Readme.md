gRPC is an open-source remote procedure call(RPC) framework created by Google. It is an inter-process communication technology based on HTTP/2, that is used for client-server and duplex streaming of data, and this data streaming is highly efficient because of the use of protocol buffers.

Protocol buffer is a library that helps us serialize structured data built by Google. It is platform-, and language-neutral, it currently supports generated code in Java, Python, Objective-C, and C++. The latest proto3 version supports more languages. The protocol buffers are where we define our service definitions and messages. This is written in IDL(Interface Definition Language) language, this will be like a contract or common interface between the client and server on what to expect from each other; the methods, types, and returns of what each operation would bear.

### A gRPC service contains, the server, protocol buffer, and the client

### Reference
https://daily.dev/blog/build-a-grpc-service-in-nodejs