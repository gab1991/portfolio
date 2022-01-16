import React, { HTMLAttributes } from 'react';
import { IProject } from 'types/project';
import cn from 'classnames';
import * as styles from './ProjectCardMobile.module.scss';
import { GatsbyImage, getImageData, StaticImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

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
    </div>
  );
}
