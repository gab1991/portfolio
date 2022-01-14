import React, { HTMLAttributes } from 'react';
import { IProject } from 'types/project';
import cn from 'classnames';
import * as styles from './PojectCard.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { tech } from 'constants/tech';

interface IProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: IProject;
}

export function ProjectCard(props: IProjectCardProps) {
  const { project, className, ...htmlProps } = props;

  console.log(project);
  return (
    <div className={cn(styles.projectCard, className)} {...htmlProps}>
      <div className={styles.videoContainer}>
        <StaticImage src="../../../assets/temp/meteora.jpg" alt="kek" />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.firstPart}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div className={styles.secondPart}>
          <h3 className={styles.stackTitle}>TECH STACK</h3>
          <div className={styles.techContainer}>
            <h4 className={styles.subHeader}>FRONTEND :</h4>
          </div>
          <div className={styles.techContainer}>
            <h4 className={styles.subHeader}>BACKEND :</h4>
            <ul>
              {project.technologies.backEnd.map((techname) => {
                const IconMono = tech[techname].IconMono;
                return (
                  <li key={techname} className={styles.tech}>
                    {techname}
                    <IconMono className={styles.techSvg} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
