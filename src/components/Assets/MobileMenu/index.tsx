import * as React from "react";

export const MobileMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={26} viewBox="0 0 10 8" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 1h8M1 4h8M1 7h8"
    />
  </svg>
);
