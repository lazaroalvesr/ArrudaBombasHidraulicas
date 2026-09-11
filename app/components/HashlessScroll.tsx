'use client';

import { useEffect } from 'react';

export function HashlessScroll() {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;

      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = anchor?.getAttribute('href')?.slice(1);
      if (!anchor || !id) return;

      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return null;
}