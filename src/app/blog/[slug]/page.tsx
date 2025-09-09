import Image from "next/image";
import { sanity, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

// Minimal och säker typ som funkar med urlFor
type SanityImageSource =
  | string
  | { _type?: string; asset?: { _ref?: string; _id?: string } }
  | null
  | undefined;

type Post = {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImageSource;
  body: PortableTextBlock[];
};

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await sanity.fetch(
    `*[_type=="post"]{ slug }`
  );
  return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post: Pick<Post, "title" | "excerpt"> | null = await sanity.fetch(
    `*[_type=="post" && slug.current==$slug][0]{ title, excerpt }`,
    { slug: params.slug }
  );
  return {
    title: post ? `${post.title} – Turesson Atelier` : "Post – Turesson Atelier",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: Post = await sanity.fetch(
    `*[_type=="post" && slug.current==$slug][0]{
      title, slug, publishedAt, excerpt, mainImage, body
    }`,
    { slug: params.slug }
  );

  const hasImage = Boolean(post.mainImage);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="font-[var(--font-cinzel)] text-4xl">{post.title}</h1>
        <p className="text-white/60 mt-1">
          {new Date(post.publishedAt).toLocaleDateString("sv-SE")}
        </p>
      </header>

      {hasImage ? (
        <div className="mb-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src={urlFor(post.mainImage!).width(1200).height(630).url()}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </div>
      ) : null}

      <article className="prose prose-invert max-w-none">
        <PortableText value={post.body} />
      </article>
    </main>
  );
}
