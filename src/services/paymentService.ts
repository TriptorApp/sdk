import { PaymentParams } from "../types";
import { EscrowService } from "./escrowService";
import { logger } from "../utils/logger";

export class PaymentService {
  private escrowService = new EscrowService();

  async processPayment(params: PaymentParams) {
    if (params.escrow) {
      logger.info("Creating escrow...");

      const escrow = await this.escrowService.createEscrow({
        payer: "sender_wallet",
        recipient: params.recipient,
        amount: params.amount
      });

      return {
        type: "escrow",
        ...escrow
      };
    }

    logger.info("Processing instant USDC transfer...");

    return {
      type: "instant",
      txId: "mock_tx_hash",
      amount: params.amount,
      recipient: params.recipient
    };
  }
}
