import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMyNetwork = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.39 8.85q-.53 0-1.01.24-1.16-1.25-2.22-3.08 1.3-1.77 3.08-2.83 2.21.91 3.66 1.97-.15.38-.15.77 0 .14.1.53-1.5 1.15-2.79 2.5-.38-.1-.67-.1m-2.36 2.36q0 .82.48 1.44-1.44 2.74-1.92 5.58Q0 15.68 0 12.56 0 9.9 1.2 7.6q.92 1.5 2.02 2.7-.19.57-.19.9zm8.08-7.65q-.67 0-1.2.34-1.4-1.01-2.74-1.68 2.02-.73 3.9-.73 2.88 0 5.52 1.5-1.82.33-3.9 1.2-.62-.63-1.58-.63m3.51 11.06q-3.85-.57-6.97-2.69.1-.48.1-.72 0-.58-.34-1.25.91-1.06 2.35-2.17.63.49 1.35.49.34 0 .91-.2 2.26 2.6 3.23 5.77-.39.34-.63.78zm3.08 3.18q.91-.34 1.3-1.45 1.4-.1 2.6-.43-1.11 3.51-4 5.58.15-1.15.15-2.36 0-.24-.03-.67t-.02-.67zm-3.6-1.59q-4.58 2.3-7.32 6.54-2.16-.86-3.8-2.64.3-3.47 1.93-6.6.14.06.48.06.72 0 1.25-.34 3.41 2.36 7.45 2.98zm4.42-11.83q3.6 3.27 3.6 8.18 0 .52-.1 1.58-1.53.43-3.12.58-.58-1.35-2.12-1.44-1.15-3.51-3.55-6.35.24-.48.24-1.01v-.24q2.4-1.01 5.05-1.3zm-3.27 13.08q.33.24.77.43.04.44.04 1.25 0 1.93-.33 3.47-2.07 1-4.67 1-1.4 0-2.7-.28 2.65-3.85 6.89-5.87z" />
  </svg>
);
export default SvgMyNetwork;
