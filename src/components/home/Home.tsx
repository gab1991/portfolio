import React, { useRef } from 'react';
import { ButtonLink } from 'components';

import * as styles from './Home.module.scss';
import { useGlobalContext } from 'context';
import { StaticImage } from 'gatsby-plugin-image';
import { useParallax } from 'hooks';

export function Home() {
  const { isMobile } = useGlobalContext();
  const ref = useRef<HTMLElement>(null);
  const [parallax] = useParallax({ speed: 0.5, ref });

  return (
    <section className={styles.home} ref={ref}>
      {isMobile ? (
        <StaticImage
          src="../../../assets/images/header_background_mobile.jpg"
          alt="headerBackground"
          className={styles.backgroundImg}
          style={{ position: 'absolute' }}
          quality={80}
          aspectRatio={1}
          width={768}
        />
      ) : (
        <StaticImage
          src="../../../assets/images/header_background_hd.jpg"
          alt="headerBackground"
          className={styles.backgroundImg}
          style={{ position: 'absolute' }}
          imgStyle={{ transform: `translate3d(0, ${parallax}px, 0)` }}
          quality={90}
          width={1600}
          aspectRatio={16 / 9}
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
