import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import worker from "../worker/index.js";

test("adds CSP, HSTS and anti-clickjacking headers to every response", async () => {
  const env = {
    ASSETS: {
      fetch: async () => new Response("ok", { status: 200 }),
    },
  };

  const response = await worker.fetch(
    new Request("https://www.sapberatungandreasklaus.de/"),
    env,
  );

  assert.match(response.headers.get("content-security-policy"), /frame-ancestors 'none'/);
  assert.equal(
    response.headers.get("strict-transport-security"),
    "max-age=31536000",
  );
  assert.equal(response.headers.get("x-frame-options"), "DENY");
});

test("configures the same security headers at the Vercel edge", async () => {
  const config = JSON.parse(
    await readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  );
  const headers = new Map(
    config.headers[0].headers.map(({ key, value }) => [key.toLowerCase(), value]),
  );

  assert.equal(config.headers[0].source, "/(.*)");
  assert.match(headers.get("content-security-policy"), /frame-ancestors 'none'/);
  assert.equal(headers.get("strict-transport-security"), "max-age=31536000");
  assert.equal(headers.get("x-frame-options"), "DENY");
  assert.equal(headers.get("x-content-type-options"), "nosniff");
  assert.equal(
    headers.get("referrer-policy"),
    "strict-origin-when-cross-origin",
  );
  assert.equal(
    headers.get("permissions-policy"),
    "camera=(), geolocation=(), microphone=(), payment=()",
  );
});
