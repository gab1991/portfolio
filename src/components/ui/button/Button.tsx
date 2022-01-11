import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import cn from 'classnames';
import * as styles from './Button.module.scss';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...htmlprops } = props;
  return <button className={cn(styles.btn, className)} {...htmlprops} />;
}
