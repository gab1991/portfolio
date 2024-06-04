import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import * as styles from './ProjectVideo.module.scss';
import retroVideo from '../../../assets/videos/retro.webm';
import meteoraVideo from '../../../assets/videos/meteora.webm';

import cn from 'classnames';

interface IProjectVideoProps extends HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  isReversed?: boolean;
  projectName: string;
}

export function ProjectVideo(props: IProjectVideoProps) {
  const { isVisible, isReversed, projectName } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isStoppedManually, setIsStoppedManually] = useState(false);

  useEffect(() => {
    isVisible ? playVideo() : pauseVideo();
  }, [isVisible]);

  const onVideoClick = () => {
    isPaused ? playVideo() : pauseVideo();
    setIsStoppedManually(true);
  };

  const playVideo = () => {
    setIsPaused(false);
    setIsStoppedManually(false);
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    setIsPaused(true);
    videoRef.current?.pause();
  };

  return (
    <button
      className={cn(styles.videoWrapper, {
        [styles.videoWrapper_paused]: isPaused && isStoppedManually,
        [styles.videoWrapper_visible]: isVisible,
        [styles.videoWrapper_reversed]: isReversed,
      })}
      onClick={onVideoClick}
      aria-label="play/stop video"
    >
      <video ref={videoRef} loop muted preload="true" playsInline className={cn(styles.video)}>
        <source src={projectName === 'Meteora-app' ? meteoraVideo : retroVideo} type="video/webm" />
      </video>
    </button>
  );
}
