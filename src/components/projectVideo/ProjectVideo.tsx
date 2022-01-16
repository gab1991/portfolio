import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import * as styles from './ProjectVideo.module.scss';
import cn from 'classnames';

interface IProjectVideoProps extends HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  isReversed?: boolean;
  videoLink: string;
}

export function ProjectVideo(props: IProjectVideoProps) {
  const { isVisible, isReversed, videoLink } = props;

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
    >
      <video ref={videoRef} loop muted preload="true" playsInline className={cn(styles.video)}>
        {/* place video in static folder in the root */}
        <source src={videoLink} type="video/webm" />
      </video>
    </button>
  );
}
