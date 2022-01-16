import { useEffect, useState } from 'react';

interface IUseParallaxProps {
  speed?: number;
}

export function useParallax(prop: IUseParallaxProps) {
  const { speed = 1 } = prop;
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    const parralaxShift = () => {
      setOffSet(window && window.pageYOffset);
    };

    window && window.addEventListener('scroll', parralaxShift);

    return () => {
      window && window.removeEventListener('scroll', parralaxShift);
    };
  }, []);

  return [offset * speed];
}
