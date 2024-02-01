import type { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import {
  type HandshakeRequest,
  HandshakeResponse,
} from "./proto-generated-files/handshake";

const MOCK_DATABASE = [
  {
    id: "1",
    macAddress: "DA-D9-48-4E-CE-65",
  },
];

export function handshake(
  call: ServerUnaryCall<HandshakeRequest, HandshakeResponse>,
  callback: sendUnaryData<HandshakeResponse>
): void {
  const { macAddress } = call.request;
  const isMonikaExist = MOCK_DATABASE.find(
    (db) => db.macAddress === macAddress
  );

  if (!isMonikaExist) {
    callback(null, HandshakeResponse.create({ id: "" }));
    return;
  }

  const response = HandshakeResponse.create({ id: isMonikaExist.id });

  callback(null, response);
}
