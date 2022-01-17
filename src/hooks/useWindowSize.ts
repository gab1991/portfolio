import { useState, useEffect } from 'react';

interface IUseWindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): IUseWindowSize {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const resizeHandler = () => {
      setWindowSize(getSize());
    };

    globalThis.addEventListener('resize', resizeHandler);

    return () => {
      globalThis.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return windowSize;
}

function getSize(): IUseWindowSize {
  return {
    width: globalThis.innerWidth,
    height: globalThis.innerHeight,
  };
}
