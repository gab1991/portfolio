import React, { useState, useRef } from 'react';
import useResizeClassAdder from '../../Utils/CutomHooks/useResizeClassAdder';
import HamburgerSvg from '../UI/SvgIcons/Hamburger';
import EscSvg from '../UI/SvgIcons/Esc';
import styles from './Header.module.scss';

export default function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useResizeClassAdder(navRef.current, styles.StopTransitions);

  return (
    <header className={styles.Header}>
      <nav
        className={`${styles.Nav} ${isNavOpen ? styles.NavOpen : ''}`}
        ref={navRef}>
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
