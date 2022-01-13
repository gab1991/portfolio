import { useEffect, useRef } from 'react';

interface IPropsUseTempClassOnEvent {
  className: string;
  timeMs: number;
  ev: keyof WindowEventMap;
}

export function useTempClassOnEvent(props: IPropsUseTempClassOnEvent) {
  const { className, timeMs, ev } = props;
  const resizeTimer = useRef(0);

  useEffect(() => {
    const handler = () => {
      document.body.classList.add(className);

      clearTimeout(resizeTimer.current);

      resizeTimer.current =
        window &&
        window.setTimeout(() => {
          document.body.classList.remove(className);
        }, timeMs);
    };

    window && window.addEventListener(ev, handler);

    return () => {
      document.body.classList.remove(className);
      window && window.removeEventListener(ev, handler);
    };
  }, []);
}
