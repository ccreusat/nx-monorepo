import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckboxSelected = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.353 2A2.353 2.353 0 0 0 2 4.353v15.294C2 20.947 3.053 22 4.353 22h15.294c1.3 0 2.353-1.053 2.353-2.353V4.353C22 3.053 20.947 2 19.647 2H4.353Zm13.625 4.925c.529.378.651 1.113.273 1.641l-5.882 8.236a1.176 1.176 0 0 1-1.878.048l-3.53-4.434a1.177 1.177 0 0 1 1.617-1.682c.267.02.525.148.704.374l2.175 2.732 4.23-5.921a.996.996 0 0 1 .356-.308l.294-.412a1.177 1.177 0 0 1 1.641-.274Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckboxSelected;
