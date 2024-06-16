import React, { useState } from 'react';
import cn from 'classnames';
import { SVG } from 'components/ui/svg';
import { EmptyBtn } from 'components';
import { Link } from 'gatsby';

import * as styles from './Header.module.scss';

const headerLinks = [
  {
    txtContent: 'EXPERIENCE',
    href: '#experience',
  },
  {
    txtContent: 'PROJECTS',
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

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <nav className={cn(styles.nav, { [styles.nav_open]: isNavOpen })}>
        <ul className={styles.ul}>
          {headerLinks.map((link) => (
            <li className={styles.li} key={link.txtContent}>
              <Link to={link.href}>{link.txtContent}</Link>
            </li>
          ))}
        </ul>
        <EmptyBtn
          onClick={toggleNav}
          className={cn(styles.svgBtnWrapper, { [styles.navClosed]: !isNavOpen })}
          aria-label="close navigation"
        >
          <SVG.Esc />
        </EmptyBtn>
      </nav>
      <EmptyBtn onClick={toggleNav} className={styles.svgBtnWrapper} aria-label="open navigation">
        <SVG.Hamburger />
      </EmptyBtn>
    </header>
  );
}
