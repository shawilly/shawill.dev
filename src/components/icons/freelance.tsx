export const Freelance = (size: "sm" | "md" | "lg" = "md"): JSX.Element => {
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
      width={sizeNumber}
      height={sizeNumber}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M10 7.5 8 10l2 2.5M14 7.5l2 2.5-2 2.5" />
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
};
