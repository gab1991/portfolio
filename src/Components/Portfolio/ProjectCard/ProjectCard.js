import React from 'react';
import Button from '../../UI/Button/Button';
import styles from '../ProjectCard/ProjectCard.module.scss';

export default function ProjectCard(props) {
  const { images, title, description, technologies } = props;
  console.log(images);
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ScreenshotArea}>
        <img src={images.desktop} alt="mobile" className={styles.DescktopImg} />
      </div>
      <div className={styles.TextArea}>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>TECHNOLOGIES</h4>
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
          <Button rounded icon txtContent={'CODE'} />
        </div>
      </div>
    </div>
  );
}
