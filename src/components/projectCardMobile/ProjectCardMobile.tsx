import React, { HTMLAttributes } from 'react';
import { IProject } from 'types/project';
import cn from 'classnames';
import * as styles from './ProjectCardMobile.module.scss';
import { GatsbyImage, getImageData, StaticImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { GradientLink, TechContainer } from 'components';
import { SVG } from 'components/ui/svg';

export const query = graphql`
  {
    allFile {
      nodes {
        childrenImageSharp {
          gatsbyImageData(quality: 80, placeholder: BLURRED)
        }
        name
      }
    }
  }
`;

interface IProjectCardMobileProps extends HTMLAttributes<HTMLDivElement> {
  project: IProject;
  isReversed?: boolean;
}

export function ProjectCardMobile(props: IProjectCardMobileProps) {
  const { project, className, isReversed, ...htmlProps } = props;
  const { allFile } = useStaticQuery(query);

  const file = allFile.nodes.find((node: { name: string }) => node.name === project.picture);
  const image = file.childrenImageSharp[0].gatsbyImageData;

  return (
    <div className={cn(styles.projectCardMobile, className)} {...htmlProps}>
      <GatsbyImage image={image} alt={project.name} className={styles.img} />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.descr}>{project.description}</p>
      <h4 className={styles.techHeading}>TECHNOLOGIES</h4>
      <TechContainer project={project} section="frontEnd" className={styles.techContainer} />
      <TechContainer project={project} section="backEnd" className={styles.techContainer} />
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
  );
}
