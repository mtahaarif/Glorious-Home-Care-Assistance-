import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // Allows all search engines (Googlebot, Bingbot, etc.)
      userAgent: "*",
      // Allows them to scan every page on your website
      allow: "/",
      // (Optional) If you ever create an admin dashboard, you would block it here like this:
      // disallow: "/admin/",
    },
    // Tells search engines exactly where to find your website map
    sitemap: "https://www.glorioushomecareassistance.com/sitemap.xml",
  };
}