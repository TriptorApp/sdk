import Triptor from "./sdk/Triptor";
import { config } from "./config";

async function main() {
  const triptor = new Triptor({
    apiKey: config.apiKey
  });

  const payment = await triptor.pay({
    amount: 100,
    currency: "USDC",
    recipient: "AgentWallet123",
    escrow: true
  });

  console.log("Payment Result:", payment);

  const identity = await triptor.verifyIdentity("AgentWallet123");
  console.log("Identity:", identity);
}

main();
