import Script from "next/script";

const SITE_ID_PATTERN = /^[A-Za-z0-9_-]+$/;

export function MediavineScript() {
  const siteId = process.env.NEXT_PUBLIC_MEDIAVINE_SITE_ID?.trim();
  if (!siteId || !SITE_ID_PATTERN.test(siteId)) {
    return null;
  }

  return (
    <Script
      id="mediavine-loader"
      src={`https://scripts.mediavine.com/tags/${siteId}.js`}
      strategy="afterInteractive"
      async
      data-noptimize="1"
      data-cfasync="false"
    />
  );
}

export const MEDIAVINE_CONTENT_CLASS =
  "mediavine-content-area prose prose-slate max-w-none min-w-0";
