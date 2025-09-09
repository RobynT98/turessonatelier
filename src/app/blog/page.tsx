import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx"; // <-- ändrat från "@/src/lib/mdx"

export const metadata = { title: "Blogg – Turesson Atelier" };

export default async function BlogIndex() {
  const posts = await getAllPostsMeta();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-[var(--font-cinzel)] text-4xl mb-8">Blogg</h1>
      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="border border-white/10 rounded-xl p-5 hover:bg-white/5 transition">
            <Link href={`/blog/${p.slug}`} className="block">
              <h2 className="text-2xl">{p.title}</h2>
              <p className="text-white/60 text-sm mt-1">
                {new Date(p.date).toLocaleDateString("sv-SE")}
              </p>
              {p.excerpt && <p className="text-white/80 mt-2">{p.excerpt}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

