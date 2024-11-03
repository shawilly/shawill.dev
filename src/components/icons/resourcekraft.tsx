export const ResourceKraft = (size: "sm" | "md" | "lg" = "md"): JSX.Element => {
  let sizeNumber = 20;

  switch (size) {
    case "sm":
      sizeNumber = 20;
      break;
    case "md":
      sizeNumber = 30;
      break;
    case "lg":
      sizeNumber = 40;
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${sizeNumber} ${sizeNumber}`}
    >
      <defs>
        <radialGradient
          id="a"
          cx={25.63}
          cy={48.04}
          r={21.44}
          fx={47.073}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#00a82c" />
          <stop offset={1} stopColor="#00782c" />
        </radialGradient>
        <radialGradient
          xlinkHref="#a"
          id="c"
          cx={13.56}
          cy={104.8}
          r={39.06}
          fx={13.563}
        />
        <radialGradient
          id="b"
          cx={96.81}
          cy={68.48}
          r={45.63}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.43} stopColor="#c8ea30" />
          <stop offset={0.59} stopColor="#b0ea28" />
          <stop offset={0.76} stopColor="#90ea1e" />
        </radialGradient>
        <radialGradient xlinkHref="#b" id="e" cx={90.6} cy={54.71} r={42.7} />
        <linearGradient
          id="d"
          x1={23}
          x2={94.25}
          y1={47.21}
          y2={47.21}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.42} stopColor="#66d700" />
          <stop offset={0.72} stopColor="#00a82c" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M28.75 57.33c9.67 0 15.25-5.16 15.25-12.77v-.26c0-8.51-5.93-12.89-15.6-12.89H8.63v25.92Z"
        transform="translate(-8.63)"
      />
      <path
        fill="url(#c)"
        fillRule="evenodd"
        d="m24.34 74.87 19.34 28.88-2.56 13.11A60.39 60.39 0 0 1 8.63 89.41l.11-14.54Z"
        transform="translate(-8.63)"
      />
      <path
        fill="#66d700"
        fillRule="evenodd"
        d="m65.37 103.75-4.32 15.87a62.06 62.06 0 0 1-28.56-2.76l2.56-13.11Z"
      />
      <path
        fill="url(#d)"
        fillRule="evenodd"
        d="M60.82 0c13.27 1.08 38.23 8.2 32.62 31.37H77.52L60.58 94.43 44.84 71.51s19.34-4.64 19.34-28.24c0-11.86-4.8-17.61-9-21.79-3.07-3.08-11.52-8-25.06-8H23A59.62 59.62 0 0 1 60.82 0"
        transform="translate(-8.63)"
      />
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M106.89 61.66 120 50.43a60.88 60.88 0 0 1 .78 9.71 60.09 60.09 0 0 1-4.85 23.73Z"
        transform="translate(-8.63)"
      />
      <path
        fill="url(#e)"
        fillRule="evenodd"
        d="M60.86 0c27.41.43 45.51 14.72 54.82 35.82l-30.82 27.6 8.58-32C100.24 2.55 60.86 0 60.86 0Z"
        transform="translate(-8.63)"
      />
      <path
        fill="#c8ea30"
        fillRule="evenodd"
        d="m85.64 71.18 11 29.34a59.81 59.81 0 0 1-35.58 19.1L70.65 84Z"
      />
    </svg>
  );
};
