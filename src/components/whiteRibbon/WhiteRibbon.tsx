import { useGlobalContext } from 'context';
import { DesktopRibbon } from './DesktopRibbon';
import { MobileRibbon } from './MobileRibbon';
import * as styles from './WhiteRibbon.module.scss';
import React from 'react';

interface IWhiteRibbonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WhiteRibbon(props: IWhiteRibbonProps) {
  const { children } = props;
  const { isMobile } = useGlobalContext();

  return (
    <div className={styles.WhiteRibbonWrapper}>
      <div className={styles.WhiteRibbon}>
        <div className={styles.SectionNameContainer}>{children}</div>
        {isMobile ? <MobileRibbon /> : <DesktopRibbon />}
      </div>
    </div>
  );
}
