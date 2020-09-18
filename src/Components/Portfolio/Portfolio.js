import React from 'react';
import { projects } from '../../Configs/Projects';
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
        {projects.map((project, index) => {
          return (
            <ProjectCard
              {...project}
              key={project.name}
              className={styles.ProjectCard}
              isInverted={index % 2 === 0}
            />
          );
        })}
      </div>
      <div className={styles.BottomWaveWrapper}>
        <div className={styles.BottomWave}>
          <svg viewBox="0 0 1920 162" fill="none">
            <clipPath
              id="bottomWaveClipPath"
              clipPathUnits="objectBoundingBox"
              transform={`scale(${1 / 1920} ${1 / 162})`}>
              <path d="M0 0H1920V75C1920 75 1656.5 240.5 963 114.5C269.5 -11.5 0 107.5 0 107.5L0 0Z" />
            </clipPath>
          </svg>
        </div>
      </div>
    </section>
  );
}
