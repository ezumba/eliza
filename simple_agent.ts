import { Keypair, Connection } from "@solana/web3.js";
import * as fs from "fs";
import * as path from "path";

// USE ABSOLUTE PATH TO PLUGIN
const PLUGIN_PATH = "/home/edt/exergynet_node/dist/index.js";
const ExergyNetClient = (await import(PLUGIN_PATH)).ExergyNetClient;

async function runAgent() {
    console.log("[AGENT] Initializing ExergyNet-Enabled Agent...");
    
    const rpcUrl = "https://mainnet.helius-rpc.com/?api-key=9badbf22-fe20-4190-a79a-a7f12e63a4fc";
    const connection = new Connection(rpcUrl, "confirmed");
    const keypairJson = JSON.parse(fs.readFileSync(process.env.HOME + "/.config/solana/id.json", "utf-8"));
    const payer = Keypair.fromSecretKey(new Uint8Array(keypairJson));

    const client = new ExergyNetClient();
    
    console.log("[!!!] OMEGA AGENT READY FOR KINETIC STRIKE [!!!]");
    
    // This calls your Membrane's open_job instruction via MCP Gateway
    const sig = await client.mcpHandshake(payer);
    console.log("[LNES-03] Strike Result:", sig);
}

runAgent().catch(console.error);
