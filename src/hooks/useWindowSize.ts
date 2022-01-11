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

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return windowSize;
}

function getSize(): IUseWindowSize {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
