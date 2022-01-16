import React from 'react';
import { ButtonLink } from 'components';

import * as styles from './Home.module.scss';
import { useGlobalContext } from 'context';

export function Home() {
  const { isMobile } = useGlobalContext();

  return (
    <section className={styles.home}>
      <h1>IGOR KORNILOV</h1>
      <h2>{isMobile ? 'FRONT END ENGINEER' : 'FRONT END FOCUSED WITH FULL STACK EXPERIENCE'}</h2>
      <ButtonLink className={styles.btn} to="#portfolio">
        CHECK MY WORK
      </ButtonLink>
    </section>
  );
}
