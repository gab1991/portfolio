import React, { HTMLAttributes, useRef } from 'react';
import { IProject } from 'types/project';
import { useIntersectionObserver } from 'hooks';
import { GradientLink } from 'components/ui';
import { SVG } from 'components/ui/svg';
import { ProjectVideo, TechContainer } from 'components';
import meteoraVideo from '/assets/videos/meteora.mp4';
import retroVideo from '/assets/videos/retro.mp4';

import * as styles from './PojectCard.module.scss';

import cn from 'classnames';

const videMapper: Record<string, string> = {
  'Meteora-app': meteoraVideo,
  'Retro-game-app': retroVideo,
};

interface IProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: IProject;
  isReversed?: boolean;
}

export function ProjectCard(props: IProjectCardProps) {
  const { project, className, isReversed, ...htmlProps } = props;
  const cardRef = useRef<HTMLDivElement>(null);

  const { isVisible } = useIntersectionObserver({ ref: cardRef });

  console.log(meteoraVideo, retroVideo);

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
          videoLink={videMapper[project.name]}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div>
          <h3 className={styles.stackTitle}>TECH STACK</h3>
          <TechContainer project={project} section="frontEnd" />
          <TechContainer project={project} section="backEnd" />
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
