import React, { useRef } from 'react';

import { DarkenLink } from 'components';
import { SVG } from 'components/ui/svg';
import { AvailableTechnologies, tech } from 'constants/tech';
import { useGlobalContext } from 'context';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './About.module.scss';
import { useParallax } from 'hooks';

export const aboutQuery = graphql`
  {
    site {
      siteMetadata {
        aboutPage {
          description
          toolkitList
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "resumes" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

const resumeEngRegExp = /resume/i;

interface IAboutQuery {
  description: string;
  toolkitList: AvailableTechnologies[];
}

export function About() {
  const { isMobile } = useGlobalContext();
  const ref = useRef<HTMLElement>(null);
  const [parralaxShift] = useParallax({ speed: 0.5, ref });
  const query = useStaticQuery(aboutQuery);
  const { description, toolkitList } = query.site.siteMetadata.aboutPage as IAboutQuery;
  const pdfs: string[] = query.allFile.edges.map(
    (edge: { node: { publicURL: any } }) => edge.node.publicURL
  );

  return (
    <section className={styles.about} id="about" ref={ref}>
      {isMobile ? (
        <StaticImage
          src="../../../assets/images/about_background_mobile.jpg"
          alt="aboutBackground"
          className={styles.backgroundImg}
          style={{ position: 'absolute' }}
          quality={80}
          width={768}
        />
      ) : (
        <StaticImage
          src="../../../assets/images/about_background_hd.jpg"
          alt="aboutBackground"
          className={styles.backgroundImg}
          style={{ position: 'absolute' }}
          imgStyle={{ transform: `translate3d(0, ${parralaxShift}px, 0)` }}
          quality={90}
          width={1600}
        />
      )}
      <h2 className={styles.title}>ABOUT</h2>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.toolkitl}>TOOLKIT</h3>
      <ul className={styles.toolkitList}>
        {toolkitList.map((technology) => {
          const { fullname, IconMono } = tech[technology];
          return (
            <li key={technology} className={styles.techContainer}>
              <IconMono className={styles.icon} />
              {fullname}
            </li>
          );
        })}
      </ul>
      <div className={styles.resumeSection} id="resume">
        {pdfs.map((pdfLink) => {
          if (resumeEngRegExp.test(pdfLink)) {
            return (
              <DarkenLink key={pdfLink} className={styles.darkenLink} href={pdfLink}>
                <SVG.Download className={styles.downloadSvg} />
                Download Resume (ENG)
              </DarkenLink>
            );
          }
        })}
      </div>
    </section>
  );
}
