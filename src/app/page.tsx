import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="prose-title text-5xl tracking-tight">Turesson Atelier</h1>
        <p className="mt-4 max-w-xl text-white/70">
          En studio för ord, bilder och digitalt hantverk — mörk sammet med en kant av guld.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg px-5 py-3 bg-gold-500 text-ink-900 hover:bg-gold-700 transition"
          >
            Läs bloggen
          </Link>

          <Link
            href="/calendar"
            className="inline-flex items-center rounded-lg px-5 py-3 border border-white/20 text-white hover:bg-white/10 transition"
          >
            Se kalender
          </Link>
        </div>
      </section>
    </main>
  );
}
