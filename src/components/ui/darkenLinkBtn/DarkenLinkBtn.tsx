import React, { AnchorHTMLAttributes } from 'react';
import cn from 'classnames';
import * as styles from './DarkenLink.module.scss';

export function DarkenLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { className, ...htmlprops } = props;
  return (
    <a
      className={cn(styles.darkenLink, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...htmlprops}
    />
  );
}
