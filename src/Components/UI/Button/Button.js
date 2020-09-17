import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  const {
    txtContent,
    onClick: clickHander,
    disabled,
    className,
    rounded,
  } = props;

  return (
    <button
      onClick={clickHander}
      disabled={disabled}
      className={`${styles.Button} ${rounded ? styles.Rounded : ''}`}>
      {txtContent}
    </button>
  );
}
