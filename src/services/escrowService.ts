import { EscrowParams } from "../types";
import { v4 as uuidv4 } from "uuid";

export class EscrowService {
  async createEscrow(params: EscrowParams) {
    const escrowId = uuidv4();

    return {
      escrowId,
      status: "locked",
      ...params
    };
  }

  async releaseEscrow(escrowId: string) {
    return {
      escrowId,
      status: "released"
    };
  }
}
