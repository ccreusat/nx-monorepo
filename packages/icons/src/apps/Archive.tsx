import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArchive = ({
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
    <path d="M8.59 5.68v-1.7H6.88v1.7h1.7zm1.73 1.73V5.68H8.58V7.4h1.74zM8.59 9.1V7.4H6.88v1.7h1.7zm1.73 1.74V9.12H8.58v1.73h1.74zm9.37-5.22q.39.39.65 1.01t.27 1.2v15.44q0 .55-.36.91t-.92.39H1.3q-.55 0-.91-.39t-.39-.9V1.83q0-.55.4-.91t.9-.39h12.03q.53 0 1.18.27t1.01.65zm-5.96-3.27V7.4h5.05q-.12-.41-.29-.55l-4.2-4.21q-.15-.17-.56-.3zm5.17 20.51V9.12h-5.58q-.55 0-.91-.39t-.39-.89v-5.6h-1.7v1.73H8.59V2.24H1.7v20.63h17.2zm-8.42-9.69 1.45 4.69q.1.36.1.7 0 1.1-.97 1.85t-2.47.72-2.46-.72-.98-1.85q0-.34.12-.7.29-.84 1.6-5.31v-1.71h1.71v1.7h1.06q.32 0 .53.17t.31.46m-1.9 6.25q.73 0 1.23-.26t.5-.6-.5-.6-1.22-.27-1.2.27-.51.6.5.6 1.2.26" />
  </svg>
);
export default SvgArchive;
