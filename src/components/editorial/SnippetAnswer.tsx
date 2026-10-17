export function SnippetAnswer({ children }: { children: string }) {
  return (
    <p className="mb-6 max-w-reading rounded-2xl border border-brand-primary/20 bg-white px-4 py-3 leading-relaxed text-slate-800">
      {children}
    </p>
  );
}

export function DirectAnswer({ children }: { children: string }) {
  return (
    <p className="mb-6 max-w-reading rounded-2xl border border-brand-primary/30 bg-white px-4 py-3 text-base font-semibold leading-relaxed text-slate-900">
      {children}
    </p>
  );
}
