import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/review-board", destination: "/editorial-standards", permanent: true },
      { source: "/editorial-policy", destination: "/editorial-standards", permanent: true },
      // Consolidated food topic URLs (species clones → parent guides)
      { source: "/nutrition/chocolate-dogs", destination: "/nutrition/chocolate", permanent: true },
      { source: "/nutrition/chocolate-cats", destination: "/nutrition/chocolate", permanent: true },
      { source: "/nutrition/chocolate-birds", destination: "/nutrition/chocolate", permanent: true },
      { source: "/nutrition/chocolate-small-pets", destination: "/nutrition/chocolate", permanent: true },
      { source: "/nutrition/grapes-raisins-dogs", destination: "/nutrition/grapes-raisins", permanent: true },
      { source: "/nutrition/grapes-raisins-cats", destination: "/nutrition/grapes-raisins", permanent: true },
      { source: "/nutrition/xylitol-dogs", destination: "/nutrition/xylitol", permanent: true },
      { source: "/nutrition/xylitol-cats", destination: "/nutrition/xylitol", permanent: true },
      { source: "/nutrition/onions-garlic-dogs", destination: "/nutrition/onions-garlic", permanent: true },
      { source: "/nutrition/onions-garlic-cats", destination: "/nutrition/onions-garlic", permanent: true },
      { source: "/nutrition/onions-garlic-small-pets", destination: "/nutrition/onions-garlic", permanent: true },
      { source: "/nutrition/lilies-cats", destination: "/nutrition/lilies", permanent: true },
      { source: "/nutrition/lilies-dogs", destination: "/nutrition/lilies", permanent: true },
      { source: "/nutrition/avocado-birds", destination: "/nutrition/avocado", permanent: true },
      { source: "/nutrition/avocado-dogs", destination: "/nutrition/avocado", permanent: true },
      { source: "/nutrition/macadamia-nuts-dogs", destination: "/nutrition/macadamia-nuts", permanent: true },
      { source: "/nutrition/caffeine-dogs", destination: "/nutrition/caffeine", permanent: true },
      { source: "/nutrition/caffeine-cats", destination: "/nutrition/caffeine", permanent: true },
      { source: "/nutrition/blueberries-dogs", destination: "/nutrition/blueberries", permanent: true },
      { source: "/nutrition/blueberries-cats", destination: "/nutrition/blueberries", permanent: true },
      { source: "/nutrition/pumpkin-dogs", destination: "/nutrition/pumpkin", permanent: true },
      { source: "/nutrition/pumpkin-cats", destination: "/nutrition/pumpkin", permanent: true },
      { source: "/nutrition/cooked-chicken-dogs", destination: "/nutrition/cooked-chicken", permanent: true },
      { source: "/nutrition/cooked-chicken-cats", destination: "/nutrition/cooked-chicken", permanent: true },
      { source: "/nutrition/carrots-dogs", destination: "/nutrition/carrots", permanent: true },
      { source: "/nutrition/carrots-small-pets", destination: "/nutrition/carrots", permanent: true },
      { source: "/nutrition/green-beans-dogs", destination: "/nutrition/green-beans", permanent: true },
      { source: "/nutrition/salmon-dogs", destination: "/nutrition/salmon", permanent: true },
      { source: "/nutrition/salmon-cats", destination: "/nutrition/salmon", permanent: true },
      { source: "/nutrition/timothy-hay-small-pets", destination: "/nutrition/timothy-hay", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
