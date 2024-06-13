import React, { useRef } from 'react';

import { useGlobalContext } from 'context';
import { StaticImage } from 'gatsby-plugin-image';
import { WhiteRibbon } from '../whiteRibbon';

import * as styles from './Experience.module.scss';
import { useParallax } from 'hooks';

export function Experience() {
  const { isMobile } = useGlobalContext();
  const ref = useRef<HTMLElement>(null);
  const [parralaxShift] = useParallax({ speed: 0.5, ref });

  return (
    <section className={styles.experience} id="experience" ref={ref}>
      <WhiteRibbon>
        <h2>EXPERIENCE</h2>
        <h3>Explore my career journey</h3>
      </WhiteRibbon>
      {isMobile && (
        <StaticImage
          src="../../../assets/images/about_background_mobile.jpg"
          alt="aboutBackground"
          className={styles.backgroundImg}
          style={{ position: 'absolute' }}
          quality={100}
          width={768}
        />
      )}
      {!isMobile && (
        <StaticImage
          src="../../../assets/images/about_background_hd.jpg"
          alt="aboutBackground"
          className={styles.backgroundImg}
          style={{ position: 'absolute', transform: `translate3d(0, ${parralaxShift}px, 0)` }}
          quality={100}
          width={1600}
        />
      )}
    </section>
  );
}
