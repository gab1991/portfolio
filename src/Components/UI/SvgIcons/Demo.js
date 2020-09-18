import * as React from 'react';

function Demo(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 53 53" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M.76 26.6c0-14.36 11.64-26 26-26s26 11.64 26 26-11.64 26-26 26h-26v-4.334h11.646A25.996 25.996 0 01.76 26.6zm13.264 17.529a6.5 6.5 0 107.641-10.518 6.5 6.5 0 00-7.64 10.518zm.32-28.397a6.5 6.5 0 10-4.017 12.363 6.5 6.5 0 104.017-12.363zM26.76 4.933a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm20.607 14.971a6.501 6.501 0 00-12.365 4.017 6.501 6.501 0 0012.365-4.017zM30.417 42.69a6.5 6.5 0 1010.517-7.64 6.5 6.5 0 00-10.518 7.64zm-1.49-16.09a2.167 2.167 0 10-4.334 0 2.167 2.167 0 004.334 0z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="matrix(-1 0 0 1 52.76 .6)"
            d="M0 0h52v52H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoDemo = React.memo(Demo);
export default MemoDemo;
