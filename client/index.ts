import { ServiceError, credentials } from "@grpc/grpc-js";
import {
  HandshakeRequest,
  HandshakeResponse,
  MonikaClient,
} from "./proto-generated-files/handshake";

const PORT = 4000;
const SERVER_CREDENTIALS = credentials.createInsecure();
const MOCK_MAC_ADDRESS = "DA-D9-48-4E-CE-65";

async function main() {
  const client = new MonikaClient(`localhost:${PORT}`, SERVER_CREDENTIALS);
  const request = HandshakeRequest.create({ macAddress: MOCK_MAC_ADDRESS });
  client.handshake(request, handshakeHandler);
}

function handshakeHandler(
  error: ServiceError | null,
  response: HandshakeResponse
) {
  if (error) {
    console.error(error);
    return;
  }

  console.info(`Monika ID: ${response.id}`);
}

main().catch(console.error);
