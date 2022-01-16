import { DarkenLink } from 'components';
import { SVG } from 'components/ui/svg';
import { AvailableTechnologies, tech } from 'constants/tech';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import * as styles from './About.module.scss';

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

const resumeRusRegExp = /resume_rus/i;
const resumeEngRegExp = /resume_eng/i;

interface IAboutQuery {
  description: string;
  toolkitList: AvailableTechnologies[];
}

export function About() {
  const query = useStaticQuery(aboutQuery);
  const { description, toolkitList } = query.site.siteMetadata.aboutPage as IAboutQuery;
  const pdfs: string[] = query.allFile.edges.map(
    (edge: { node: { publicURL: any } }) => edge.node.publicURL
  );

  console.log(pdfs);

  return (
    <section className={styles.about} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.toolkitl}>TOOLKIT</h3>
      <ul className={styles.toolkitList}>
        {toolkitList.map((technology) => {
          const { fullname, IconMono } = tech[technology];
          return (
            <div key={technology} className={styles.techContainer}>
              <IconMono className={styles.icon} />
              {fullname}
            </div>
          );
        })}
      </ul>
      <div className={styles.resumeSection} id="resume">
        {pdfs.map((pdfLink) => {
          if (resumeRusRegExp.test(pdfLink)) {
            return (
              <DarkenLink key={pdfLink} className={styles.darkenLink} href={pdfLink}>
                <SVG.Download className={styles.downloadSvg} />
                Download Resume (RUS)
              </DarkenLink>
            );
          }
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
