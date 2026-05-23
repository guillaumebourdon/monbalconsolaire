'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { search, type SearchResult } from '@/lib/search-index';

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const open = useCallback(() => { setIsOpen(true); setQuery(''); setResults([]); }, []);
  const close = useCallback(() => { setIsOpen(false); setQuery(''); setResults([]); }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, close]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    setResults(search(query));
  }, [query]);

  const categoryColor: Record<string, string> = {
    'Avis': 'bg-amber-pale text-amber-dark',
    'Comparatif': 'bg-green-pale text-green',
    'Guide': 'bg-green-lighter text-green',
    'Blog': 'bg-cream-dark text-charcoal-light',
    'Outil': 'bg-amber-pale text-amber-dark',
    'Bons plans': 'bg-amber-pale text-amber-dark',
    'Transparence': 'bg-green-pale text-green',
  };

  if (!isOpen) {
    return (
      <button onClick={open} className="p-2 rounded-lg text-stone hover:text-green hover:bg-green-pale transition-all" aria-label="Rechercher" title="Rechercher (\u2318K)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[200]" onClick={close} />

      {/* Modal */}
      <div className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-full max-w-lg z-[201] px-4">
        <div className="bg-white rounded-brand-xl shadow-2xl border border-border overflow-hidden page-enter">
          {/* Search input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border-light">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A8A80" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Rechercher un article, un kit, un guide..."
              className="flex-1 text-sm bg-transparent outline-none placeholder:text-stone"
            />
            <button onClick={close} className="text-xs text-stone bg-cream border border-border-light rounded px-2 py-1 hover:bg-cream-dark transition-colors">Esc</button>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto">
            {query.length >= 2 && results.length === 0 && (
              <div className="px-5 py-8 text-center text-sm text-stone">
                Aucun r&eacute;sultat pour &laquo;&thinsp;{query}&thinsp;&raquo;
              </div>
            )}

            {results.length > 0 && (
              <div className="py-2">
                {results.map((r, i) => (
                  <Link
                    key={r.url}
                    href={r.url}
                    onClick={close}
                    className={`flex items-start gap-3 px-5 py-3 hover:bg-green-pale/30 transition-colors suggestion-enter`}
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${categoryColor[r.category] || 'bg-cream text-stone'}`}>{r.category}</span>
                        <span className="text-[10px] text-stone">{r.badge}</span>
                      </div>
                      <h4 className="font-semibold text-sm text-charcoal truncate">{r.title}</h4>
                      <p className="text-xs text-stone truncate mt-0.5">{r.description}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A8A80" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-2"><polyline points="9 18 15 12 9 6"/></svg>
                  </Link>
                ))}
              </div>
            )}

            {query.length < 2 && (
              <div className="px-5 py-6">
                <p className="text-[10px] uppercase tracking-widest text-stone font-semibold mb-3">Recherches populaires</p>
                <div className="flex flex-wrap gap-2">
                  {['Sunology PLAY 2', 'Beem Kit 300W', 'Rentabilit\u00e9', 'Installation', 'Batterie', 'Locataire', 'CACSI Enedis', 'Talon consommation'].map(tag => (
                    <button key={tag} onClick={() => setQuery(tag)} className="text-xs px-3 py-1.5 bg-cream rounded-full border border-border-light hover:border-green/30 hover:bg-green-pale/20 transition-all text-charcoal-light">{tag}</button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-2.5 border-t border-border-light bg-cream/50 flex items-center justify-between text-[10px] text-stone">
            <span>{results.length > 0 ? `${results.length} r\u00e9sultat${results.length > 1 ? 's' : ''}` : 'Tapez pour rechercher'}</span>
            <span className="flex items-center gap-2">
              <kbd className="bg-white border border-border-light rounded px-1 py-0.5 font-mono">&uarr;&darr;</kbd> naviguer
              <kbd className="bg-white border border-border-light rounded px-1 py-0.5 font-mono">&crarr;</kbd> ouvrir
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
