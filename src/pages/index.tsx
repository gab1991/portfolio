import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { About, Header, Home, Portfolio } from 'components';
import 'normalize.css';
import 'styles/globals.scss';
import * as styles from './index.module.scss';
import { GlobalContextProvider } from 'context/global';
import { useTempClassOnEvent } from 'hooks';

export default function IndexPage() {
  useTempClassOnEvent({ timeMs: 500, className: 'stop-transition', ev: 'resize' });

  return (
    <GlobalContextProvider>
      <main className={styles.main}>
        <Header />
        <Home />
        <Portfolio />
        <About />

        {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p> */}
      </main>
    </GlobalContextProvider>
  );
}
