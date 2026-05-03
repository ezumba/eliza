import type { Plugin, IAgentRuntime, Memory, State } from "@elizaos/core";
import { PublicKey } from "@solana/web3.js";

export const LNES_PROGRAM_ID = new PublicKey("7BCPpUMBxQMPomsgTaJsQdLEfycNwPWqkQD1Cea4CcCL");
export const OMEGA_MINT = new PublicKey("5fZZJ29oH5SDqxiz2tkEf1wopp5Sn5TtcCF3fPS9rdiJ");

export const exergynetPlugin: Plugin = {
    name: "exergynet",
    description: "ExergyNet compute membrane on Solana.",
    actions: [],
    providers: [{
        get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
            return `ExergyNet: ${LNES_PROGRAM_ID.toBase58()} | Mint: ${OMEGA_MINT.toBase58()}`;
        }
    }],
    init: async (_config: Record<string, string>, _runtime: IAgentRuntime) => {
        console.log("[exergynet] plugin initialized");
    }
};

export default exergynetPlugin;
