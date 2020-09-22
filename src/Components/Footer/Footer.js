import React from 'react';
import Button from '../UI/Button/Button';
import Envelope from '../UI/SvgIcons/Envelope';
import { personalInfo } from '../../Configs/Projects';
import styles from '../Footer/Footer.module.scss';

export default function Footer(props) {
  const getInTouchHandler = () => {
    window.location = `mailto:${personalInfo.email}`;
  };

  return (
    <footer className={styles.Footer} id={'contacts'}>
      <Button
        txtContent={'GET IN TOUCH'}
        Icon={Envelope}
        footer
        className={styles.Btn}
        onClick={getInTouchHandler}
      />
      <ul className={styles.ContacList}>
        <li>
          <a
            href={personalInfo.facebook}
            target="_blank"
            rel="noopener noreferrer">
            FACEBOOK
          </a>
        </li>
        <li>
          <a
            href={personalInfo.telegram}
            target="_blank"
            rel="noopener noreferrer">
            TELEGRAM
          </a>
        </li>
        <li>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer">
            GITHUB
          </a>
        </li>
      </ul>
    </footer>
  );
}
