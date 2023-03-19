import React from "react";

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11S1 18.071 1 12 5.929 1 12 1zM9 6.753 15.44 12 9 17.263l.678.737L17 12 9.665 6 9 6.753z" />
  </svg>
);
