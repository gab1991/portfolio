import React from 'react';
import Button from '../UI/Button/Button';
import Envelope from '../UI/SvgIcons/Envelope';
import { personalInfo } from '../../Configs/Projects';
import styles from '../Footer/Footer.module.scss';

const footerLinks = [
  {
    txtContent: 'FACEBOOK',
    href: personalInfo.facebook,
  },
  {
    txtContent: 'TELEGRAM',
    href: personalInfo.telegram,
  },
  {
    txtContent: 'GITHUB',
    href: personalInfo.github,
  },
  {
    txtContent: 'LINKEDIN',
    href: personalInfo.linkedIn,
  },
];

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
        {footerLinks.map((link) => (
          <li>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.txtContent}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
