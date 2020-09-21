import React from 'react';
import styles from './Link.module.scss';

export default function Link(props) {
  const { className, IconSvg, txtContent, href = '', blank = true } = props;

  return (
    <a
      href={href}
      className={`${styles.Link} ${className}`}
      target={blank ? '_blank' : null}>
      {IconSvg && <IconSvg />}
      <span className={styles.TxtContent}>{txtContent}</span>
    </a>
  );
}
