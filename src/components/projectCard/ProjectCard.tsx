import React, { HTMLAttributes, useRef } from 'react';
import { IProject } from 'types/project';
import cn from 'classnames';
import { tech } from 'constants/tech';
import { useIntersectionObserver } from 'hooks';

import * as styles from './PojectCard.module.scss';
import { GradientLink } from 'components/ui';
import { SVG } from 'components/ui/svg';
import { ProjectVideo } from 'components';

interface IProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: IProject;
  isReversed?: boolean;
}

export function ProjectCard(props: IProjectCardProps) {
  const { project, className, isReversed, ...htmlProps } = props;
  const cardRef = useRef<HTMLDivElement>(null);

  const { isVisible } = useIntersectionObserver({ ref: cardRef });

  return (
    <div
      className={cn(styles.projectCard, { [styles.projectCard_reversed]: isReversed }, className)}
      ref={cardRef}
      {...htmlProps}
    >
      <div className={styles.videoContainer}>
        <ProjectVideo
          isReversed={isReversed}
          isVisible={isVisible}
          videoLink={`/${project.video}`}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.firstPart}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div className={styles.secondPart}>
          <h3 className={styles.stackTitle}>TECH STACK</h3>
          <TechContainer project={project} section="frontEnd" isVisible={isVisible} />
          <TechContainer project={project} section="backEnd" isVisible={isVisible} />
        </div>
        <div className={styles.linksContainer}>
          <GradientLink className={styles.gradientLink} href={project.links.live}>
            <span>LIVE</span>
            <SVG.World className={styles.gradientSvg} />
          </GradientLink>
          <GradientLink className={styles.gradientLink} href={project.links.frontEndCode}>
            <span>FRONTEND CODE</span>
            <SVG.Github className={styles.gradientSvg} />
          </GradientLink>
          <GradientLink className={styles.gradientLink} href={project.links.backEndCode}>
            <span>BACKEND CODE</span>
            <SVG.Github className={styles.gradientSvg} />
          </GradientLink>
        </div>
      </div>
    </div>
  );
}

interface ITechContainerProps extends HTMLAttributes<HTMLUListElement> {
  project: IProject;
  section: 'backEnd' | 'frontEnd';
  isVisible?: boolean;
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
