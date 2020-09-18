import * as React from 'react';

function CSS(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 64 90" fill="none" {...props}>
      <path
        d="M57.796 82.53L32 89.474 6.203 82.529.25 18.04h63.5l-5.954 64.49z"
        fill="#2062AF"
      />
      <path
        d="M32 23.262v60.673l.058.016 20.875-5.622 4.819-55.067H31.999z"
        fill="#3C9CD7"
      />
      <path
        d="M17.36 8.564V4.725h5.6v-4.2h-9.801v11.872h9.8V8.564h-5.6zm15.674-3.839h3.915v-4.2h-9.801v4.2c1.311 1.312 1.995 1.94 3.891 3.836-1.108 0-3.891.004-3.891.004v3.832h9.801V8.564l-3.915-3.839zm13.892 0h3.915v-4.2h-9.802v4.2c1.311 1.312 1.996 1.94 3.892 3.836-1.108 0-3.892.004-3.892.004v3.832h9.802V8.564l-3.915-3.839z"
        fill="#000"
      />
      <path
        d="M31.976 39.388l-18.463 7.689.613 7.613 17.85-7.633 18.99-8.118.786-7.788-19.776 8.237z"
        fill="#fff"
      />
      <path
        d="M13.513 47.077l.612 7.613 17.851-7.633v-7.67l-18.463 7.69z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M51.753 31.151l-19.776 8.236v7.67l18.988-8.118.788-7.788z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        d="M13.541 47.077l.613 7.613 27.39.087-.613 10.151-9.013 2.537-8.664-2.187-.525-6.3h-8.05l1.05 12.163 16.277 4.812 16.188-4.725 2.1-24.151H13.542z"
        fill="url(#prefix__paint2_linear)"
      />
      <path
        opacity={0.05}
        d="M31.976 47.077H13.513l.613 7.613 17.85.057v-7.67zm0 20.364l-.087.025-8.663-2.188-.525-6.3h-8.05L15.7 71.14l16.275 4.813V67.44z"
        fill="#000"
      />
      <path
        d="M11.85 31.151h39.903l-.788 7.788H12.813l-.962-7.788z"
        fill="url(#prefix__paint3_linear)"
      />
      <path
        opacity={0.05}
        d="M31.977 31.151H11.85l.962 7.788h19.164v-7.788z"
        fill="#000"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={22.744}
          y1={54.69}
          x2={22.744}
          y2={39.387}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.387} stopColor="#D1D3D4" stopOpacity={0} />
          <stop offset={1} stopColor="#D1D3D4" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={41.864}
          y1={47.058}
          x2={41.864}
          y2={31.151}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.387} stopColor="#D1D3D4" stopOpacity={0} />
          <stop offset={1} stopColor="#D1D3D4" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={13.541}
          y1={61.515}
          x2={50.294}
          y2={61.515}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8E7E5" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear"
          x1={11.851}
          y1={35.045}
          x2={51.752}
          y2={35.045}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8E7E5" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoCSS = React.memo(CSS);
export default MemoCSS;
