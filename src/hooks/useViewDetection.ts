import { useEffect, useState } from 'react';
import { useWindowSize } from './';

const mobileBreakpoint = 768;

interface IUseViewDetection {
  isMobile: boolean;
}

export function useViewDetection(): IUseViewDetection {
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobile(width < mobileBreakpoint);
  }, [width]);

  return { isMobile };
}
