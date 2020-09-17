import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  const { txtContent, onClick: clickHander, disabled, className } = props;

  return (
    <button onClick={clickHander} disabled={disabled} className={styles.Button}>
      {txtContent}
    </button>
  );
}
