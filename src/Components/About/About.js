import React from 'react';
import { personalInfo } from '../../Configs/Projects';
import Link from '../UI/Link/Link';
import JSSvg from '../UI/SvgIcons/Js';
import ReactSvg from '../UI/SvgIcons/React';
import ReduxSvg from '../UI/SvgIcons/Redux';
import HTMLSvg from '../UI/SvgIcons/Html5';
import CssSvg from '../UI/SvgIcons/CSS';
import SassSvg from '../UI/SvgIcons/Sass';
import NodeJsSvg from '../UI/SvgIcons/NodeJS';
import MySqlSvg from '../UI/SvgIcons/MySql';
import DownloadSvg from '../UI/SvgIcons/Download';
import styles from './About.module.scss';

export default function About(props) {
  const frontEndIcons = [JSSvg, ReactSvg, ReduxSvg, HTMLSvg, CssSvg, SassSvg];
  const backeEndIcons = [NodeJsSvg, MySqlSvg];

  return (
    <section className={styles.About} id={'about'}>
      <h2 className={styles.Title}>ABOUT</h2>
      <p className={styles.Description}>{personalInfo.about_decription}</p>
      <ul className={styles.TechList}>
        <li>
          <span>{`What i use on the front-end : `}</span>
          {frontEndIcons.map((IconSvg, index) => (
            <div className={styles.SvgWrapper} key={index}>
              <IconSvg />
            </div>
          ))}
        </li>
        <li>
          <span>{`What i use on the back-end : `}</span>
          {backeEndIcons.map((IconSvg, index) => (
            <div
              className={`${styles.SvgWrapper} ${styles.BiggerSvg}`}
              key={index}>
              <IconSvg />
            </div>
          ))}
        </li>
      </ul>
      <div className={styles.ResumeSection} id={'resume'}>
        <Link
          txtContent={`Download Resume (RUS)`}
          IconSvg={DownloadSvg}
          className={styles.Link}
          href={personalInfo.resume_rus}
        />
        <Link
          txtContent={`Download Resume (ENG)`}
          IconSvg={DownloadSvg}
          className={styles.Link}
          href={personalInfo.resume_eng}
        />
      </div>
    </section>
  );
}
