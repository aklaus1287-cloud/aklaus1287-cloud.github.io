import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await cp(resolve(root, "out"), resolve(dist, "client"), { recursive: true });
await cp(resolve(root, "worker", "index.js"), resolve(dist, "server", "index.js"));

console.log("Prepared the Sites worker and static assets in dist.");
