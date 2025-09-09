import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx"; // <-- ändrat
// import { Prose } from "@/components/content/Prose"; // om du använder den

type Props = { params: { slug: string } }; // <-- typ för 'slug'

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  return { title: `${post.title} – Turesson Atelier`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="font-[var(--font-cinzel)] text-4xl">{post.title}</h1>
        <p className="text-white/60 mt-1">{new Date(post.date).toLocaleDateString("sv-SE")}</p>
      </header>

      <article className="prose prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
            },
          }}
        />
      </article>
    </main>
  );
}
