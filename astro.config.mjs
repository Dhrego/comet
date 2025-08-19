import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dhrego.com",
  trailingSlash: "ignore",
  adapter: vercel(),
  integrations: [react(), sitemap()],
});
