import React from 'react';
import * as styles from './ExperienceCard.module.scss';
import { Workplace } from 'constants/workplaces';

interface ExperienceCard extends React.HTMLAttributes<HTMLDivElement> {
  workplace: Workplace;
  orientation?: 'left' | 'right';
}

export const ExperienceCard = ({
  workplace,
  orientation = 'left',
  ...htmlProps
}: ExperienceCard) => {
  return (
    <div className={styles.expCard} {...htmlProps}>
      <div className={styles.svgContainer} data-orientation={orientation}>
        <workplace.svg className={styles.svg} />
      </div>
      <hr className={styles.breakLine} />
      <div>
        <header className={styles.title}>
          <div className={styles.dot} />
          <span>{workplace.title}</span>
          <span className={styles.term}>{workplace.period}</span>
        </header>
        <ul className={styles.list}>
          {workplace.bulletPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
