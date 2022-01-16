import { useEffect, useState } from 'react';

interface IUseParallaxProps {
  speed?: number;
  ref: React.RefObject<HTMLElement | null>;
}

export function useParallax(prop: IUseParallaxProps) {
  const { speed = 1, ref } = prop;
  const [parralaxShift, setParallaxShift] = useState(0);

  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const parralaxShift = () => {
      const pageOffset = window ? window.pageYOffset : 0;
      const elementOffsetTop = ref.current ? ref.current.offsetTop : 0;

      const parallaxShift = (pageOffset - elementOffsetTop) * speed;

      setParallaxShift(parallaxShift);
    };

    window && window.addEventListener('scroll', parralaxShift);

    return () => {
      window && window.removeEventListener('scroll', parralaxShift);
    };
  }, []);

  return [parralaxShift];
}
