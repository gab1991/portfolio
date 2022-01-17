import React from 'react';
import { About, Footer, Header, Home, Portfolio, Seo } from 'components';
import { GlobalContextProvider } from 'context/global';
import { useTempClassOnEvent } from 'hooks';
import 'normalize.css';
import 'styles/globals.scss';
import * as styles from './index.module.scss';

export default function IndexPage() {
  useTempClassOnEvent({ timeMs: 500, className: 'stop-transition', ev: 'resize' });

  return (
    <GlobalContextProvider>
      <Seo />
      <main className={styles.main}>
        <Header />
        <Home />
        <Portfolio />
        <About />
        <Footer />
      </main>
    </GlobalContextProvider>
  );
}
