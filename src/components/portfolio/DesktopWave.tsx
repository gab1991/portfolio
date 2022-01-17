import React from 'react';

export function DesktopWave() {
  return (
    <svg viewBox="0 0 1920 162" fill="none">
      <clipPath
        id="bottomWaveClipPath"
        clipPathUnits="objectBoundingBox"
        transform={`scale(${1 / 1920} ${1 / 162})`}
      >
        <path d="M0 0H1920V75C1920 75 1656.5 240.5 963 114.5C269.5 -11.5 0 107.5 0 107.5L0 0Z" />
      </clipPath>
    </svg>
  );
}
