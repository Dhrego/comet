import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
  }),
  integrations: [react()],
});
