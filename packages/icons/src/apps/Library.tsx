import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLibrary = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.02 12.14c0 3.2-1.24 6.22-3.51 8.5s-5.3 3.51-8.5 3.51A12.03 12.03 0 0 1 12 .11c1.38 0 2.37.23 3.65.68.25.08.48.18.67.26l.08.03a.62.62 0 0 1 .06.04.76.76 0 0 1 .29.26.73.73 0 0 1 .13.45.78.78 0 0 1-.76.79.71.71 0 0 1-.34-.1 25.46 25.46 0 0 0-.66-.25 8.59 8.59 0 0 0-3.13-.6 10.46 10.46 0 1 0 10.47 10.47c0-1.72-.37-3.1-1.18-4.62a13.64 13.64 0 0 1-.2-.36L21.03 7 21 6.96l-.03-.03-.01-.04-.04-.06-.14-.24-.04.14a.73.73 0 0 1-.89.53.73.73 0 0 1-.45-.34.76.76 0 0 1-.07-.55l.46-1.76a.78.78 0 0 1 .36-.49.87.87 0 0 1 .63-.06l1.75.56a.73.73 0 0 1 .47.9v.01a.73.73 0 0 1-.72.5c.17.3.32.59.4.77a10.9 10.9 0 0 1 1.35 5.33zm-4.18-8.96a1.38 1.38 0 1 1-2.76 0 1.38 1.38 0 0 1 2.76 0m-7.78 1.44c-2.62 0-5.15 2.02-5.15 4.9 0 3.5 2.48 4.4 2.76 6.68h4.77c.29-2.28 2.76-3.17 2.76-6.68 0-2.88-2.53-4.9-5.14-4.9m-.48 1.1c.28-.02.52.12.5.4a.45.45 0 0 1-.4.45 3.21 3.21 0 0 0-2.84 3.2c0 .32.05.64.14.94.09.22-.05.5-.27.57s-.5-.09-.55-.32a4.06 4.06 0 0 1-.18-1.2 4.08 4.08 0 0 1 3.6-4.04M9.7 17.05v.85h4.72v-.85zm0 1.71v.43c0 .5.4.86.85.86h3a.86.86 0 0 0 .87-.86v-.43zm1.5 1.72a.86.86 0 1 0 1.71 0z" />
  </svg>
);
export default SvgLibrary;
