import { z, defineCollection } from "astro:content";

// defineCollection({
//   schema: z.object({
//     isDraft: z.boolean(),
//     title: z.string(),
//     sortOrder: z.number(),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
//     }),
//     author: z.string().default("Anonymous"),
//     language: z.enum(["en", "es"]),
//     tags: z.array(z.string()),
//     // 一个可选的 frontmatter 属性。非常普遍！
//     footnote: z.string().optional(),
//     // 在 frontmatter 中，周围没有引号的日期被解释为 Date 对象
//     publishDate: z.date(),
//     // 可以将日期字符串 (例如 "2022-07-08") 转换为 Date 对象
//     // publishDate: z.string().transform((str) => new Date(str)),
//     //Advanced: 验证字符串是否也是电子邮件
//     authorContact: z.string().email(),
//     // Advanced: 验证该字符串也是一个 URL
//     canonicalURL: z.string().url(),
//   }),
// });

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postsCollection,
};
