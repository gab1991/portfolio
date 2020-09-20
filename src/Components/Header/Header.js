import React, { useState } from 'react';
import HamburgerSvg from '../UI/SvgIcons/Hamburger';
import EscSvg from '../UI/SvgIcons/Esc';
import styles from './Header.module.scss';

export default function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className={styles.Header}>
      <nav className={`${styles.Nav} ${isNavOpen ? styles.NavOpen : ''}`}>
        <ul>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#resume">RESUME</a>
          </li>
          <li>
            <a href="#contacts">CONTACTS</a>
          </li>
        </ul>
        <div
          className={`${styles.EscSvgWrapper} ${
            isNavOpen ? '' : styles.NavClosed
          }`}
          onClick={toggleNav}>
          <EscSvg />
        </div>
      </nav>
      <div className={styles.SvgWraper} onClick={toggleNav}>
        <HamburgerSvg />
      </div>
    </header>
  );
}
