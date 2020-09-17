import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './Portfolio.module.scss';

export default function Portfolio(props) {
  return (
    <section className={styles.Portfolio}>
      <div className={styles.WhiteRibbonWrapper}>
        <div className={styles.WhiteRibbon}>
          <div className={styles.SectionNameContainer}>
            <h2>PORTFOLIO</h2>
            <h3>
              Below you can see some of my projects I've been working on lately
            </h3>
          </div>
          <svg viewBox="0 0 1920 787" fill="none">
            <clipPath
              id="ribbonClipPath"
              clipPathUnits="objectBoundingBox"
              transform={`scale(${1 / 1920} ${1 / 787})`}>
              <path d="M0 0.000183105C0 0.000183105 326.5 248.5 962.5 83.5002C1598.5 -81.5 1920 83.5002 1920 83.5002V723.5C1920 723.5 1567.5 575.5 945 732.5C322.5 889.5 0 653 0 653V0.000183105Z" />
            </clipPath>
          </svg>
        </div>
      </div>
      <div className={styles.ProjectArea}>
        <ProjectCard />
      </div>
    </section>
  );
}
