import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOneMessaging = ({
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
      d="M5.051 12.366a455.802 455.802 0 0 1-2.746-1.822A6.543 6.543 0 0 1 .74 9.067C.248 8.44.002 7.859.002 7.322a2.7 2.7 0 0 1 .141-.905c.098-.286.242-.542.424-.752C.935 5.222 1.462 5 2.15 5h19.7c.541-.016 1.071.195 1.507.6.424.4.636.882.636 1.446 0 .673-.218 1.317-.657 1.93a6.217 6.217 0 0 1-1.632 1.567c-3.358 2.226-5.447 3.61-6.267 4.156l-.242.167-.323.222a15.448 15.448 0 0 1-1.42.902 4.052 4.052 0 0 1-.77.345 2.215 2.215 0 0 1-.67.115h-.026a2.222 2.222 0 0 1-.67-.116 4.052 4.052 0 0 1-.77-.344c-.272-.154-.506-.29-.697-.415a30.199 30.199 0 0 1-.723-.487c-.288-.2-.477-.33-.565-.389-.81-.545-1.98-1.323-3.51-2.334Zm10.943 3.962c1.517-1.052 3.74-2.524 6.667-4.416.478-.306.927-.68 1.339-1.113v10.16c0 .564-.209 1.044-.63 1.446-.437.405-.97.614-1.512.594H2.149c-.545.02-1.08-.192-1.52-.601C.21 21.996 0 21.52 0 20.95V10.8c.416.437.871.81 1.356 1.113 3.232 2.099 5.45 3.571 6.656 4.416.512.358.926.637 1.243.837a7.7 7.7 0 0 0 1.265.614c.475.198.97.303 1.47.313h.026c.5-.01.995-.115 1.47-.313a7.647 7.647 0 0 0 1.265-.614c.32-.2.735-.479 1.243-.837Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOneMessaging;
