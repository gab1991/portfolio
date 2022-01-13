import React from 'react';

export function MobileWave() {
  return (
    <svg viewBox="0 0 320 87" fill="none">
      <clipPath
        id="bottomWaveClipPath"
        clipPathUnits="objectBoundingBox"
        transform={`scale(${1 / 320} ${1 / 87})`}
      >
        <path d="M0 0H320V63C320 63 274.5 17.5 159.5 65.5C44.5 113.5 0 63 0 63V0Z" fill="#C4C4C4" />
      </clipPath>
    </svg>
  );
}
