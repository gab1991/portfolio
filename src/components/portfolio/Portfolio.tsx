import React from 'react';
import { useGlobalContext } from 'context';
import { IProject } from 'types/project';
import { useStaticQuery, graphql } from 'gatsby';
import { DesktopWave } from './DesktopWave';
import { MobileWave } from './MobileWave';
import { ProjectCard, ProjectCardMobile } from 'components';

import * as styles from './Portfolio.module.scss';
import { WhiteRibbon } from 'components/whiteRibbon';

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
      <WhiteRibbon>
        {isMobile ? (
          <h3>FRONT END FOCUSED WITH FULLSTACK EXPERIENCE</h3>
        ) : (
          <>
            <h2>PROJECTS</h2>
            <h3>Open source and pet projects I've worked on</h3>
          </>
        )}
      </WhiteRibbon>
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
