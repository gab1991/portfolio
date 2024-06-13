import React from 'react';

export function MobileRibbon() {
  return (
    <svg viewBox="0 0 320 308" fill="none">
      <clipPath
        id="ribbonClipPath"
        clipPathUnits="objectBoundingBox"
        transform={`scale(${1 / 320} ${1 / 308})`}
      >
        <path
          d="M0 0C0 0 29 108 165 65.5C301 23 320 61.5 320 61.5V270.5C320 270.5 254 242.5 165 291.5C76 340.5 0 264.5 0 264.5V0Z"
          fill="#C4C4C4"
        />
      </clipPath>
    </svg>
  );
}
