import React from 'react';
import { ButtonLink } from 'components';

import * as styles from './Home.module.scss';
import { useGlobalContext } from 'context';
import { StaticImage } from 'gatsby-plugin-image';
import { useParallax } from 'hooks';

export function Home() {
  const { isMobile } = useGlobalContext();
  const [offsetY] = useParallax({ speed: 0.5 });

  return (
    <section className={styles.home}>
      {isMobile ? (
        <StaticImage
          src="../../../assets/images/header_background_mobile.jpg"
          alt="headerBackground"
          className={styles.backgroundImg}
          quality={90}
          objectFit="fill"
        />
      ) : (
        <StaticImage
          src="../../../assets/images/header_background_hd.jpg"
          alt="headerBackground"
          className={styles.backgroundImg}
          imgStyle={{ transform: `translateY(${offsetY}px)` }}
          quality={90}
          objectFit="fill"
        />
      )}

      <h1>IGOR KORNILOV</h1>
      <h2>{isMobile ? 'FRONT END ENGINEER' : 'FRONT END FOCUSED WITH FULL STACK EXPERIENCE'}</h2>
      <ButtonLink className={styles.btn} to="#portfolio">
        CHECK MY WORK
      </ButtonLink>
    </section>
  );
}
