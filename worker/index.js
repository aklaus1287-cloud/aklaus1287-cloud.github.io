const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self' https://docs.google.com",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://docs.google.com",
  "upgrade-insecure-requests",
].join("; ");

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set("Content-Security-Policy", CONTENT_SECURITY_POLICY);
  headers.set("Strict-Transport-Security", "max-age=31536000");
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set(
    "Permissions-Policy",
    "camera=(), geolocation=(), microphone=(), payment=()",
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (response.status === 404 && url.pathname.endsWith("/")) {
      const indexUrl = new URL(`${url.pathname}index.html`, url);
      response = await env.ASSETS.fetch(new Request(indexUrl, request));
    }

    return withSecurityHeaders(response);
  },
};

export default worker;
