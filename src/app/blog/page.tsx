import Link from 'next/link'
import { sanity } from '@/lib/sanity'

type PostCard = { title: string; slug: { current: string }; excerpt?: string; publishedAt: string }

export const metadata = { title: 'Blogg – Turesson Atelier' }

export default async function BlogIndex() {
  const posts: PostCard[] = await sanity.fetch(
    `*[_type=="post"]|order(publishedAt desc){
      title, slug, excerpt, publishedAt
    }[0...50]`
  )

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-[var(--font-cinzel)] text-4xl mb-8">Blogg</h1>
      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug.current} className="border border-white/10 rounded-xl p-5 hover:bg-white/5 transition">
            <Link href={`/blog/${p.slug.current}`} className="block">
              <h2 className="text-2xl">{p.title}</h2>
              <p className="text-white/60 text-sm mt-1">
                {new Date(p.publishedAt).toLocaleDateString('sv-SE')}
              </p>
              {p.excerpt && <p className="text-white/80 mt-2">{p.excerpt}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

