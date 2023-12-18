import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHourglass = ({
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
      d="m13.138 11.993 4.358-7.721a.084.084 0 0 0 .004-.034.142.142 0 0 0-.03-.069.378.378 0 0 0-.137-.108A.616.616 0 0 0 17.05 4H6.939a.629.629 0 0 0-.258.056.395.395 0 0 0-.147.11.149.149 0 0 0-.033.072c-.002.01-.001.02.003.035l4.358 7.72a1.004 1.004 0 0 1 0 1.014l-4.358 7.721a.084.084 0 0 0-.004.034.142.142 0 0 0 .03.069.378.378 0 0 0 .137.108.617.617 0 0 0 .283.061h10.111a.63.63 0 0 0 .258-.056.396.396 0 0 0 .147-.11.148.148 0 0 0 .033-.072c.002-.01.001-.02-.003-.035l-4.358-7.72a1.004 1.004 0 0 1 0-1.014m-4.286.507L4.735 5.207a2.093 2.093 0 0 1-.22-1.206c.046-.391.202-.755.439-1.06.235-.304.542-.54.884-.699.342-.159.716-.24 1.09-.242H17.09l.084.001c.366.016.729.108 1.058.274.33.166.624.405.847.708a2.093 2.093 0 0 1 .186 2.224L15.148 12.5l4.117 7.293a2.094 2.094 0 0 1 .22 1.206 2.144 2.144 0 0 1-.439 1.06c-.235.304-.542.54-.884.699a2.63 2.63 0 0 1-1.09.242H6.91a2.617 2.617 0 0 1-1.143-.274 2.374 2.374 0 0 1-.846-.709 2.094 2.094 0 0 1-.186-2.224z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHourglass;
