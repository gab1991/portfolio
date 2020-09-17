import React from 'react';
import styles from './Header.module.scss';

export default function Header(props) {
  return (
    <header className={styles.Header}>
      <nav>
        <ul>
          <li>PORTFOLIO</li>
          <li>ABOUT</li>
          <li>RESUME</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
