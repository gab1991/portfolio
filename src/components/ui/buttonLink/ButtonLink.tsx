import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from 'react';
import cn from 'classnames';
import * as styles from './ButtonLink.module.scss';
import { Link, GatsbyLinkProps } from 'gatsby';

type ButtuonLinkProps = GatsbyLinkProps<any> | AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink(props: ButtuonLinkProps) {
  const { className, ...rest } = props;

  if (isAnchor(props)) {
    return <a className={cn(styles.btn, className)} {...rest} />;
  }

  //@ts-expect-error
  return <Link className={cn(styles.btn, className)} {...rest} />;
}

const isAnchor = (props: ButtuonLinkProps): props is AnchorHTMLAttributes<HTMLAnchorElement> => {
  return 'href' in props;
};
