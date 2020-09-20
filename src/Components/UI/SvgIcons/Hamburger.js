import * as React from 'react';

function Hamburger(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 20 18" fill="none" {...props}>
      <path d="M0 18h20v-3H0v3zm0-7.5h20v-3H0v3zM0 0v3h20V0H0z" fill="#fff" />
    </svg>
  );
}

const MemoHamburger = React.memo(Hamburger);
export default MemoHamburger;
