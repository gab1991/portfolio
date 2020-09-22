import { useEffect } from 'react';

export default function useResizeClassAddeer(elm, className, stopTimeMs = 400) {
  const isClient = typeof window === 'object';

  useEffect(() => {
    if (!isClient || !elm) return;

    let resizerTimer;

    const callback = () => {
      elm.classList.add(className);
      clearTimeout(resizerTimer);

      resizerTimer = setTimeout(() => {
        elm.classList.remove(className);
      }, stopTimeMs);
    };

    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, [elm, className, stopTimeMs, isClient]);
  return;
}
