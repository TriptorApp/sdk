import { Identity } from "../types";

export class IdentityService {
  async verify(wallet: string): Promise<Identity> {
    return {
      wallet,
      verified: true,
      reputationScore: 100
    };
  }
}
