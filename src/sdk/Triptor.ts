import { PaymentParams } from "../types";
import { PaymentService } from "../services/paymentService";
import { IdentityService } from "../services/identityService";
import { config } from "../config";

export default class Triptor {
  private paymentService = new PaymentService();
  private identityService = new IdentityService();
  private apiKey: string;

  constructor(options: { apiKey: string }) {
    if (!options.apiKey) {
      throw new Error("Triptor API key required.");
    }

    this.apiKey = options.apiKey;
  }

  async pay(params: PaymentParams) {
    return this.paymentService.processPayment(params);
  }

  async verifyIdentity(wallet: string) {
    return this.identityService.verify(wallet);
  }

  getNetwork() {
    return config.network;
  }
}
