export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-invert max-w-none prose-h2:font-[var(--font-cinzel)]">
      {children}
    </div>
  );
}
