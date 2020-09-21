import React from 'react';
import Link from '../Link/Link';
import DemoVideo from '../../UI/DemoVideo/DemoVideo';
import styles from './Modal.module.scss';

export default function Modal(props) {
  const { closeModal, data } = props;

  const clickHandler = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className={styles.Modal} onClick={clickHandler}>
      {data.type === 'code links' && (
        <div className={styles.ModalContent}>
          {data.heading && (
            <h4 className={styles.ModalHeading}>{data.heading}</h4>
          )}
          {data.type === 'code links' &&
            data.links.map((link, index) => (
              <Link
                key={index}
                txtContent={link.txtContent}
                href={link.url}
                IconSvg={link.Icon}
              />
            ))}
        </div>
      )}
      {data.type === 'demo video' && (
        <div className={styles.VideoModal}>
          <DemoVideo src={data.demoVideoLink} />
        </div>
      )}
    </div>
  );
}
