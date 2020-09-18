import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  const {
    txtContent,
    onClick: clickHander,
    disabled,
    className,
    rounded,
    Icon,
  } = props;

  console.log(className);

  return (
    <button
      onClick={clickHander}
      disabled={disabled}
      className={`${styles.Button} ${rounded ? styles.Rounded : ''} ${
        Icon ? styles.Icon : ''
      } ${className}`}>
      {Icon ? (
        <div className={styles.BtnTxtIconWrapper}>
          <p className={styles.TxtContainer}> {txtContent}</p>
          <div className={styles.SvgIconWrapper}>
            <Icon />
          </div>
        </div>
      ) : (
        txtContent
      )}
    </button>
  );
}
