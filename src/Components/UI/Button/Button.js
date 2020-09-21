import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  const {
    txtContent,
    onClick,
    disabled,
    className,
    gradient,
    footer,
    Icon,
    iconOnleft = false,
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.Button} 
      ${gradient ? styles.Gradient : ''} 
      ${Icon && gradient && !iconOnleft ? styles.IconRight : ''} 
      ${Icon && gradient && iconOnleft ? styles.IconLeft : ''}
      ${Icon && footer ? styles.FooterIcon : ''}
      ${className}`}>
      {Icon ? (
        <div className={`${styles.BtnTxtIconWrapper}`}>
          <p className={styles.TxtContainer}>{txtContent}</p>
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
