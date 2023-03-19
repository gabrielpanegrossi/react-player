import * as React from "react";

export const FullScreen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M24 22H0V2h24v20zm-7-1V6H1v15h16zm1 0h5V3H1v2h17v16zm-6-6h-1v-3.241L3.759 19 3 18.241 10.241 11H7v-1h5v5z" />
  </svg>
);
