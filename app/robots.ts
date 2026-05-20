import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://southforkroofingandchimney.com/sitemap.xml", // [TODO: Update to production domain when confirmed]
  };
}
