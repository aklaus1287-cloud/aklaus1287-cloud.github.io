import assert from "node:assert/strict";
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
