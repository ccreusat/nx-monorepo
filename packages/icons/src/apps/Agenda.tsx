import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAgenda = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 24.58V8.98h21.47v15.6zM0 7.63V2.3h2.62v3.4h4.81V2.3h6.61v3.4h4.79V2.3h2.64v5.32H0zm4.04-3.35V.53h1.97v3.75zm1.42 14.89q0 2.7 2.96 2.7 1.13 0 2.02-.78.93-.74.93-1.92 0-1.64-1.87-2.17 1.15-.36 1.54-1.15.29-.67-.05-1.75-.65-1.5-2.57-1.5-1.23 0-2.07.63t-.9 1.85H7.2q0-1.08 1.18-1.1 1.03 0 1.08 1.25 0 1.17-2.02 1.13v1.37q1.15 0 1.64.19.55.26.55 1.1 0 1.38-1.3 1.47-1.03 0-1.13-1.32zm6.76-3.51q1.17-.34 2.11-1.13v7.14h1.68v-8.92h-1.53q-.92.89-2.26 1.4v1.5zm3.24-11.38V.53h1.97v3.75z" />
  </svg>
);
export default SvgAgenda;
