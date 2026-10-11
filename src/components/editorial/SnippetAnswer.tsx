export function SnippetAnswer({ children }: { children: string }) {
  return (
    <p className="mb-6 max-w-reading rounded-2xl border border-brand-primary/20 bg-white px-4 py-3 leading-relaxed text-slate-800">
      {children}
    </p>
  );
}
