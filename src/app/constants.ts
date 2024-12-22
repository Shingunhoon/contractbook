import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

const contractAddress = "0xb2ba7e70f9911a0A062Ef2106C4032C57a478d18";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
