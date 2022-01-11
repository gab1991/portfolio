import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import * as styles from './EmptyBtn.module.scss';

export function EmptyBtn(props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  const { className, ...htmlProps } = props;

  return <button className={cn(styles.emptyBtn, className)} {...htmlProps} />;
}
