import React, { HTMLAttributes, useEffect, useRef } from 'react';
import { IProject } from 'types/project';
import cn from 'classnames';
import { tech } from 'constants/tech';
import { useIntersectionObserver } from 'hooks';

import * as styles from './PojectCard.module.scss';

interface IProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: IProject;
  isReversed?: boolean;
}

export function ProjectCard(props: IProjectCardProps) {
  const { project, className, isReversed, ...htmlProps } = props;
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isVisible } = useIntersectionObserver({ ref: cardRef });

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    isVisible ? videoRef.current.play() : videoRef.current.pause();
  }, [isVisible]);

  return (
    <div
      className={cn(styles.projectCard, { [styles.projectCard_reversed]: isReversed }, className)}
      ref={cardRef}
      {...htmlProps}
    >
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          loop
          muted
          preload="true"
          playsInline
          className={cn(styles.video, {
            [styles.video_visible]: isVisible,
            [styles.video_reversed]: isReversed,
          })}
        >
          {/* place video in static folder in the root */}
          <source src={`/${project.video}`} type="video/webm" />
        </video>
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
