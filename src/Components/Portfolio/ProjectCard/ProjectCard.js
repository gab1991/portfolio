import React from 'react';
import styles from '../ProjectCard/ProjectCard.module.scss';

export default function ProjectCard(props) {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ScreenshotArea}></div>
      <div className={styles.TextArea}></div>
    </div>
  );
}
