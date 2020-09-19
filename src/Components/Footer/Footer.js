import React from 'react';
import Button from '../UI/Button/Button';
import Envelope from '../UI/SvgIcons/Envelope';
import styles from '../Footer/Footer.module.scss';

export default function Footer(props) {
  return (
    <footer className={styles.Footer}>
      <Button
        txtContent={'GET IN TOUCH'}
        Icon={Envelope}
        footer
        className={styles.Btn}
      />
      <ul className={styles.ContacList}>
        <li>
          <a href="#">FACEBOOK</a>
        </li>
        <li>
          <a href="#">TELEGRAM</a>
        </li>
        <li>
          <a href="#">GITHUB</a>
        </li>
      </ul>
    </footer>
  );
}
