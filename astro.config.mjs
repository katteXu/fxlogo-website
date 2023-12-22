import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://extraordinary-donut-dfad80.netlify.app",
  // integrations: [tailwind()]
  integrations: [preact()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt-br"],
  },
});
