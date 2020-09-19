import * as React from 'react';

function Envelope(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 50 40" {...props}>
      <path
        d="M45.605.957H4.395A4.402 4.402 0 000 5.352v29.296a4.402 4.402 0 004.395 4.395h41.21A4.402 4.402 0 0050 34.648V5.352A4.402 4.402 0 0045.605.957zM45 3.887L25.093 23.792 5.016 3.887h39.983zM2.929 34.042V5.944l14.11 13.989-14.11 14.109zm2.072 2.071L19.12 21.995l4.947 4.905a1.465 1.465 0 002.068-.005l4.823-4.823 14.042 14.041H5zm42.07-2.071L33.028 20 47.07 5.958v28.084z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoEnvelope = React.memo(Envelope);
export default MemoEnvelope;
