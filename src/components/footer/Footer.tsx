import React from 'react';
import * as styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.Footer} id={'contacts'}>
      {/* <Button
    txtContent={'GET IN TOUCH'}
    Icon={Envelope}
    footer
    className={styles.Btn}
    onClick={getInTouchHandler}
  /> */}
      <ul className={styles.ContacList}>
        {/* {footerLinks.map((link) => (
      <li key={link.txtContent}>
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.txtContent}
        </a>
      </li>
    ))} */}
      </ul>
    </footer>
  );
}
