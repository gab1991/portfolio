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
          <TechContainer project={project} section="frontEnd" />
          <TechContainer project={project} section="backEnd" />
        </div>
      </div>
    </div>
  );
}

interface ITechContainerProps extends HTMLAttributes<HTMLUListElement> {
  project: IProject;
  section: 'backEnd' | 'frontEnd';
}

function TechContainer(props: ITechContainerProps) {
  const { project, section } = props;

  return (
    <ul className={styles.techContainer}>
      <li>
        <h4 className={styles.subHeader}>{section === 'backEnd' ? 'BACKEND :' : 'FRONTEND :'}</h4>
      </li>
      {project.technologies[section].map((techname, index, array) => {
        const { IconMono, Icon, fullname } = tech[techname];
        const isLast = index === array.length - 1;
        return (
          <li key={techname} className={styles.tech}>
            {fullname}
            <IconMono className={styles.techSvg} />
            {!isLast && ` | `}
          </li>
        );
      })}
    </ul>
  );
}
