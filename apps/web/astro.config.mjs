import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  image: {
    service: passthroughImageService(),
  },
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
});
