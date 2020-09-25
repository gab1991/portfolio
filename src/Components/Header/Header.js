import React, { useState, useRef } from 'react';
import useResizeClassAdder from '../../Utils/CutomHooks/useResizeClassAdder';
import HamburgerSvg from '../UI/SvgIcons/Hamburger';
import EscSvg from '../UI/SvgIcons/Esc';
import styles from './Header.module.scss';

const headerLinks = [
  {
    txtContent: 'PORTFOLIO',
    href: '#portfolio',
  },
  {
    txtContent: 'ABOUT',
    href: '#about',
  },
  {
    txtContent: 'RESUME',
    href: '#resume',
  },
  {
    txtContent: 'CONTACTS',
    href: '#contacts',
  },
];

export default function Header(props) {
  const { isMobile } = props;
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
          {headerLinks.map((link) => (
            <li onClick={toggleNav}>
              <a href={link.href}>{link.txtContent}</a>
            </li>
          ))}
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
