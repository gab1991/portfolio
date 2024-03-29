import React from 'react';
import { useGlobalContext } from 'context';
import { IProject } from 'types/project';
import { useStaticQuery, graphql } from 'gatsby';
import { DesktopRibbon } from './DesktopRibbon';
import { MobileRibbon } from './MobileRibbon';
import { DesktopWave } from './DesktopWave';
import { MobileWave } from './MobileWave';
import { ProjectCard, ProjectCardMobile } from 'components';

import * as styles from './Portfolio.module.scss';

export const query = graphql`
  {
    allProjectsJson {
      nodes {
        title
        technologies {
          frontEnd
          backEnd
        }
        name
        video
        picture
        links {
          frontEndCode
          backEndCode
          live
        }
        description
      }
    }
  }
`;

export function Portfolio() {
  const { isMobile } = useGlobalContext();
  const data = useStaticQuery(query);
  const projects = (data?.allProjectsJson?.nodes || []) as IProject[];

  return (
    <section id={'portfolio'}>
      <div className={styles.WhiteRibbonWrapper}>
        <div className={styles.WhiteRibbon}>
          <div className={styles.SectionNameContainer}>
            {isMobile ? (
              <h3>FRONT END FOCUSED WITH FULLSTACK EXPERIENCE</h3>
            ) : (
              <>
                <h2>PORTFOLIO</h2>
                <h3>Below you can see some of my projects I've been working on lately</h3>
              </>
            )}
          </div>
          {isMobile ? <MobileRibbon /> : <DesktopRibbon />}
        </div>
      </div>
      <div className={styles.ProjectArea}>
        {isMobile && <h2>PROJECT PORTFOLIO</h2>}
        {projects.map((project, index) => {
          return isMobile ? (
            <ProjectCardMobile
              key={project.name}
              project={project}
              className={styles.projectCardMobile}
            />
          ) : (
            <ProjectCard
              key={project.name}
              project={project}
              className={styles.ProjectCard}
              isReversed={index % 2 !== 0}
            />
          );
        })}
      </div>
      <div className={styles.BottomWaveWrapper}>
        <div className={styles.BottomWave}>{isMobile ? <MobileWave /> : <DesktopWave />}</div>
      </div>
    </section>
  );
}
