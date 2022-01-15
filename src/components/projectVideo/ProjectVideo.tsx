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
    isVisible ? setIsPaused(false) : setIsPaused(true);
    setIsStoppedManually(false);
  }, [isVisible]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    isPaused ? videoRef.current.pause() : videoRef.current.play();
  }, [isPaused]);

  const onVideoClick = () => {
    setIsPaused((prev) => !prev);
    setIsStoppedManually(true);
  };
  return (
    <div
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
    </div>
  );
}
