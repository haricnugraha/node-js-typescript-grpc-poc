# Node.js TypeScript gRPC Proof of Concept

This is a sample implementation of gRPC running on Node.js and written in TypeScript.

## Table of Contents

- [Node.js TypeScript gRPC Proof of Concept](#nodejs-typescript-grpc-proof-of-concept)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Run the Server](#run-the-server)
    - [Run the Client](#run-the-client)

## Getting Started

### Prerequisites

- [Node.js v18 or newer](https://nodejs.org/)

### Run the Server

1. Change to the server directory. Run `cd ./server`.
2. Install the dependencies. Run `npm ci`.
3. Compile the proto file. Run `npm run proto:generate`.
4. Run the server. Run `npm run dev`.

You can send a request to the server using an HTTP client GUI, such as [Postman](https://learning.postman.com/docs/sending-requests/grpc/grpc-request-interface/).

### Run the Client

1. Change to the client directory. Run `cd ./client`.
2. Install the dependencies. Run `npm ci`.
3. Compile the proto file. Run `npm run proto:generate`
4. Run the client. Run `npm run dev`.

The client application will print `Monika ID: 1`.
