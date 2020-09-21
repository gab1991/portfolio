import React from 'react';
import { projects } from '../../Configs/Projects';
import ProjectCardPc from './ProjectCard/ProjectCard';
import ProjectCardMobile from './ProjectCardMobile/ProjectCardMobile';
import styles from './Portfolio.module.scss';
import sassVars from '../../Configs/Variables.scss';
import useWindowSize from '../../Utils/CutomHooks/useWinowSize';

const mobileBreakPointWidth = parseInt(sassVars['breakpoints-mobile']);

export default function Portfolio(props) {
  const { width } = useWindowSize();
  const isMobile = mobileBreakPointWidth >= width;

  return (
    <section className={styles.Portfolio} id={'portfolio'}>
      <div className={styles.WhiteRibbonWrapper}>
        <div className={styles.WhiteRibbon}>
          <div className={styles.SectionNameContainer}>
            {isMobile ? (
              <>
                <h3>FRONT END FOCUSED WITH FULLSTACK EXPERIENCE</h3>
              </>
            ) : (
              <>
                <h2>PORTFOLIO</h2>
                <h3>
                  Below you can see some of my projects I've been working on
                  lately
                </h3>
              </>
            )}
          </div>
          {isMobile ? (
            <svg viewBox="0 0 320 308" fill="none">
              <clipPath
                id="ribbonClipPath"
                clipPathUnits="objectBoundingBox"
                transform={`scale(${1 / 320} ${1 / 308})`}>
                <path
                  d="M0 0C0 0 29 108 165 65.5C301 23 320 61.5 320 61.5V270.5C320 270.5 254 242.5 165 291.5C76 340.5 0 264.5 0 264.5V0Z"
                  fill="#C4C4C4"
                />
              </clipPath>
            </svg>
          ) : (
            <svg viewBox="0 0 1920 787" fill="none">
              <clipPath
                id="ribbonClipPath"
                clipPathUnits="objectBoundingBox"
                transform={`scale(${1 / 1920} ${1 / 787})`}>
                <path d="M0 0.000183105C0 0.000183105 326.5 248.5 962.5 83.5002C1598.5 -81.5 1920 83.5002 1920 83.5002V723.5C1920 723.5 1567.5 575.5 945 732.5C322.5 889.5 0 653 0 653V0.000183105Z" />
              </clipPath>
            </svg>
          )}
        </div>
      </div>
      <div className={styles.ProjectArea}>
        {isMobile && <h2>PROJECT PORTFOLIO</h2>}
        {projects.map((project, index) => {
          const ProjectCard = isMobile ? ProjectCardMobile : ProjectCardPc;
          return (
            <ProjectCard
              setShowModal={props.setShowModal}
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
          {isMobile ? (
            <svg viewBox="0 0 320 87" fill="none">
              <clipPath
                id="bottomWaveClipPath"
                clipPathUnits="objectBoundingBox"
                transform={`scale(${1 / 320} ${1 / 87})`}>
                <path
                  d="M0 0H320V63C320 63 274.5 17.5 159.5 65.5C44.5 113.5 0 63 0 63V0Z"
                  fill="#C4C4C4"
                />
              </clipPath>
            </svg>
          ) : (
            <svg viewBox="0 0 1920 162" fill="none">
              <clipPath
                id="bottomWaveClipPath"
                clipPathUnits="objectBoundingBox"
                transform={`scale(${1 / 1920} ${1 / 162})`}>
                <path d="M0 0H1920V75C1920 75 1656.5 240.5 963 114.5C269.5 -11.5 0 107.5 0 107.5L0 0Z" />
              </clipPath>
            </svg>
          )}
        </div>
      </div>
    </section>
  );
}
