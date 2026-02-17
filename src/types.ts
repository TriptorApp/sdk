export interface PaymentParams {
  amount: number;
  currency: "USDC";
  recipient: string;
  escrow?: boolean;
}

export interface EscrowParams {
  payer: string;
  recipient: string;
  amount: number;
}

export interface Identity {
  wallet: string;
  verified: boolean;
  reputationScore?: number;
}
