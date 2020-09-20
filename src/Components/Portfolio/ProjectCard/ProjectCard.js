import React from 'react';
import Button from '../../UI/Button/Button';
import WorldSvg from '../../UI/SvgIcons/World';
import DemoSvg from '../../UI/SvgIcons/Demo';
import GitHubSvg from '../../UI/SvgIcons/GitHub';

import styles from '../ProjectCard/ProjectCard.module.scss';

export default function ProjectCard(props) {
  const {
    images,
    title,
    description,
    technologies,
    className,
    isInverted,
  } = props;

  return (
    <div
      className={`${styles.ProjectCard} ${className} ${
        isInverted ? styles.Inverted : ''
      }`}>
      <div className={styles.ScreenshotArea}>
        <img src={images.desktop} alt="pc" className={styles.DescktopImg} />
      </div>
      <div className={styles.TextArea}>
        <h3 className={styles.TitleHeading}>{title}</h3>
        <p className={styles.Description}>{description}</p>
        <h4 className={styles.TechHeading}>TECHNOLOGIES</h4>
        <ul>
          <li>
            <span className={styles.TechAreaName}>{`Front End : `}</span>
            {technologies.frontEnd}
          </li>
          <li>
            <span className={styles.TechAreaName}>{`Back End : `}</span>
            {technologies.backEnd}
          </li>
        </ul>
        <div className={styles.BtnSection}>
          <Button
            gradient
            Icon={GitHubSvg}
            txtContent={'CODE'}
            className={styles.Btn}
          />
          <Button
            gradient
            Icon={WorldSvg}
            txtContent={'LIVE'}
            className={styles.Btn}
          />
          <Button
            gradient
            Icon={DemoSvg}
            txtContent={'DEMO'}
            className={styles.Btn}
          />
        </div>
      </div>
    </div>
  );
}
