import React from 'react';
import styles from './Link.module.scss';

export default function Link(props) {
  const { IconSvg, txtContent, href = '' } = props;

  return (
    <a href={href} className={styles.Link}>
      {IconSvg && <IconSvg />}
      <span className={styles.TxtContent}>{txtContent}</span>
    </a>
  );
}
