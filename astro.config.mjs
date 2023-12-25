import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://extraordinary-donut-dfad80.netlify.app",
  // integrations: [tailwind()]
  integrations: [preact()],
  // output: "server",
  build: {
    // cdn 前缀
    // assetsPrefix: "https://www.baidu.com",  
  },
});
