import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(content) {
  return rss({
    title: "Astro Learn | Blog",
    description: "My journey learning Astro",
    site: content.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
