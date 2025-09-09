import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  cover?: string;
};

export type Post = PostMeta & { content: string };

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export async function getPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const file = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(file);

  const meta: PostMeta = {
    slug: (data.slug as string) || slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || new Date().toISOString(),
    excerpt: data.excerpt as string | undefined,
    cover: data.cover as string | undefined,
  };

  return { ...meta, content };
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));
  return posts
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
