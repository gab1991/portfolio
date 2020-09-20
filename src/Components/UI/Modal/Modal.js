import React from 'react';
import styles from './Modal.module.scss';

export default function Modal(props) {
  const { closeModal } = props;

  const clickHandler = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className={styles.Modal} onClick={clickHandler}>
      <div className={styles.ModalContent}></div>
    </div>
  );
}
