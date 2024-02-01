import { Server, ServerCredentials } from "@grpc/grpc-js";
import { MonikaService } from "./proto-generated-files/handshake";
import { handshake } from "./service";

const PORT = 4000;
const SERVER_CREDENTIALS = ServerCredentials.createInsecure();

function main() {
  const server = new Server();
  server.addService(MonikaService, { handshake });
  server.bindAsync(`localhost:${PORT}`, SERVER_CREDENTIALS, () => {
    server.start();

    console.log("server is running on localhost:4000");
  });
}

main();
