import React from 'react';
import styles from './DemoVideo.module.scss';

export default function DemoVideo(props) {
  const { src } = props;
  return (
    <video
      width="100%"
      height="100%"
      muted
      autoPlay
      className={styles.Video}
      controls>
      <source src={src} type="video/webm"></source>
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}
