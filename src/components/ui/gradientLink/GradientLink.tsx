import React, { AnchorHTMLAttributes } from 'react';
import cn from 'classnames';
import * as styles from './GradientLink.module.scss';

export function GradientLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { className, ...htmlprops } = props;
  return (
    <a
      className={cn(styles.gradientBtn, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...htmlprops}
    />
  );
}
