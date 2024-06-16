import { tech } from 'constants/tech';
import React, { HTMLAttributes } from 'react';
import { IProject } from 'types/project';
import cn from 'classnames';
import * as styles from './TechContainer.module.scss';

interface ITechContainerProps extends HTMLAttributes<HTMLUListElement> {
  project: IProject;
  section: 'backEnd' | 'frontEnd';
}

export function TechContainer(props: ITechContainerProps) {
  const { project, section, className, ...htmlProps } = props;

  return (
    <ul className={cn(styles.techContainer, className)} {...htmlProps}>
      <li>
        <h4 className={styles.subHeader}>{section === 'backEnd' ? 'BACKEND :' : 'FRONTEND :'}</h4>
      </li>
      {project.technologies[section].map((techname, index, array) => {
        const { IconMono, fullname } = tech[techname];
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
