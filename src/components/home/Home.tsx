import React from 'react';
import { Button } from 'components';
import { navigate } from 'gatsby';
import { useViewDetection, useWindowSize } from 'hooks';
import * as styles from './Home.module.scss';

export function Home() {
  const { isMobile } = useViewDetection();
  const goToPortfolio = () => navigate('#portfolio');

  return (
    <section className={styles.home}>
      <h1>IGOR KORNILOV</h1>
      <h2>{isMobile ? 'FRONT END ENGINEER' : 'FRONT END FOCUSED WITH FULL STACK EXPERIENCE'}</h2>
      <Button className={styles.btn} onClick={goToPortfolio}>
        CHECK MY WORK
      </Button>
    </section>
  );
}
