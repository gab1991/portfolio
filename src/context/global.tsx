import { useViewDetection } from 'hooks';
import React, { useContext } from 'react';

interface IGlobalContext {
  isMobile: boolean;
}

const GlobalContext = React.createContext<null | IGlobalContext>(null);

export function GlobalContextProvider(props: { children: React.ReactNode }) {
  const { isMobile } = useViewDetection();

  return <GlobalContext.Provider value={{ isMobile }}>{props.children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  const ctx = useContext(GlobalContext);

  if (!ctx) {
    throw new Error('this hook should be used within GlobalContextProvider');
  }

  return ctx;
}
