import React from 'react';
import { Button } from 'components';
import * as styles from './Home.module.scss';

export function Home() {
  return (
    <section className={styles.home}>
      <h1>IGOR KORNILOV</h1>
      <h2>
        {/* {isMobile
      ? 'FRONT END ENGINEER'
      : 'FRONT END FOCUSED WITH FULL STACK EXPERIENCE'} */}
      </h2>
      <Button
        className={styles.Btn}
        // onClick={goToPortfolio}
      >
        CHECK MY WORK
      </Button>
    </section>
  );
}
