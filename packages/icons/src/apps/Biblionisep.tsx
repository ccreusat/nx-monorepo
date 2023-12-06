import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBiblionisep = ({
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
    <path d="M12.29 1.4c-8.63 0-8.75.02-9.3.26-.32.15-.73.46-.95.7-.67.77-.74.91-.74 7.5h3.8c-.03 0-.05-.02-.05-.02 0-.07.17-.24.34-.39.29-.21.5-.24 1.8-.24 2.26 0 2.29-.14.31-2.14-1.53-1.6-1.65-1.8-1.22-2.52.24-.41.86-.67 1.32-.55.17.02.94.7 1.68 1.44 1.9 1.9 2.07 1.87 2.07-.43 0-1.6.07-1.78.58-2.07.43-.22.8-.17 1.13.17.29.29.31.38.31 1.75 0 1.52.1 1.95.46 1.95.12 0 .84-.6 1.61-1.37.8-.8 1.54-1.42 1.73-1.47.7-.17 1.47.41 1.47 1.13 0 .55-.17.8-1.61 2.24-1.71 1.75-1.71 1.78.53 1.87 1.25.05 1.63.1 1.82.27.15.12.27.29.27.36 0 0-.02.02-.07.02h3.7c0-5.53-.02-6.27-.22-6.7a3.85 3.85 0 0 0-.67-.97c-.87-.82-.46-.8-10.1-.8zm0 5.91c-.58 0-.82.36-.82 1.2 0 .37-.02.85-.07 1.06l-.07.3h1.9v-.9c0-1.2-.24-1.66-.94-1.66m-11 2.75c0 .79.03 1.63.03 2.62.03 8.05.05 8.56.27 8.97a3.2 3.2 0 0 0 1.97 1.66c.17.04 4.06.1 8.68.1 9.1.01 9.1.01 10-.7.24-.17.58-.63.75-.97l.31-.65v-8.7l-.02-2.34H1.3zm1.33 4.15h.58v1.13l.29-.21c.1-.05.19-.07.31-.07.24 0 .4.1.53.31s.2.5.2.87c0 .38-.1.67-.25.91-.17.22-.36.34-.58.34-.12 0-.19 0-.28-.03-.08-.04-.15-.07-.22-.12l-.02.1h-.56v-3.22zm2.29 0h.62v.56h-.62v-.55zm1.15 0h.58v1.13l.26-.21a.7.7 0 0 1 .34-.07c.21 0 .38.1.5.31.15.22.2.5.2.87 0 .38-.08.67-.24.91-.15.22-.34.34-.58.34-.1 0-.2 0-.27-.03l-.21-.12-.03.1h-.55v-3.22zm2.28 0h.6v3.23h-.6V14.2zm1.13 0h.6v.56h-.6v-.55zm5.73 0h.6v.56h-.6v-.55zm-3.73.82c.31 0 .55.12.72.34s.27.53.27.91c0 .39-.1.68-.27.92-.17.21-.4.31-.72.31s-.58-.1-.74-.31c-.17-.24-.24-.53-.24-.92s.07-.7.24-.91a.93.93 0 0 1 .74-.34m7.72 0c.29 0 .5.1.65.3s.21.47.21.83v.27h-1.32c.03.17.07.31.17.4s.24.15.43.15c.12 0 .24-.02.36-.07.12-.07.22-.12.27-.2h.07v.6a1.4 1.4 0 0 1-.36.15c-.12.03-.24.05-.39.05-.36 0-.65-.1-.84-.31s-.29-.5-.29-.92c0-.38.1-.67.27-.91.19-.22.43-.34.77-.34m-5.12.03c.19 0 .33.07.45.21.1.15.15.36.15.65v1.52h-.58v-1.42c-.02-.1-.02-.17-.05-.22s-.04-.1-.1-.12c-.02-.02-.09-.02-.16-.02-.05 0-.1 0-.17.02l-.17.12v1.64h-.57V15.1h.57v.27c.1-.1.2-.2.3-.24s.2-.07.33-.07m3.07 0a1 1 0 0 1 .39.04c.12.03.22.08.29.12v.58h-.05a1.2 1.2 0 0 0-.29-.2.85.85 0 0 0-.33-.06c-.1 0-.17.02-.24.04-.05.05-.1.1-.1.15 0 .07.02.1.05.14.02.03.1.05.21.08l.17.04c.07.03.15.03.22.05.14.07.26.14.33.24.08.12.12.27.12.43 0 .24-.1.44-.26.58s-.39.22-.67.22c-.17 0-.32-.03-.46-.05l-.31-.15v-.6h.07c.02.03.05.05.1.08.02.04.09.07.14.1l.21.09c.07.03.15.02.24.02.12 0 .2 0 .27-.05.05-.02.07-.07.07-.14 0-.05-.02-.1-.05-.12s-.1-.05-.19-.07l-.17-.05a.45.45 0 0 1-.19-.05.6.6 0 0 1-.36-.26c-.1-.1-.12-.27-.12-.44 0-.21.07-.4.24-.55s.39-.21.67-.21m4.5 0c.22 0 .41.1.53.3s.2.51.2.88a1.66 1.66 0 0 1-.27.93c-.07.1-.15.2-.24.24a.83.83 0 0 1-.31.07c-.12 0-.2 0-.27-.04l-.24-.1v.96h-.58v-3.2h.58v.24l.29-.21c.1-.05.2-.07.31-.07m-16.71.04h.58v2.34h-.58zm4.54 0h.58v2.34h-.58zm5.75 0h.58v2.34h-.58zm3.92.41c-.12 0-.22.03-.29.1-.07.1-.1.2-.12.36h.77a.95.95 0 0 0-.1-.34c-.07-.1-.14-.12-.26-.12m-7.67.05c-.07 0-.12 0-.17.02l-.12.12c-.02.05-.05.12-.07.22s-.05.22-.05.36c0 .12.03.24.05.34 0 .1.02.17.07.21.03.05.07.1.12.12s.1.05.17.05c.05 0 .1-.02.14-.05s.1-.04.12-.12a.48.48 0 0 0 .1-.19l.02-.36-.02-.34a.72.72 0 0 0-.1-.24c-.02-.04-.07-.1-.12-.12s-.1-.02-.14-.02m-7.94.05c-.04 0-.1.02-.16.05-.05 0-.1.04-.17.07v1.18c.05.02.1.02.12.04h.14c.15 0 .27-.04.34-.16s.12-.3.12-.53c0-.22-.02-.36-.07-.48-.07-.12-.17-.17-.31-.17zm3.44 0c-.07 0-.12.02-.16.05-.08 0-.12.04-.17.07v1.18l.12.04h.12c.17 0 .29-.04.36-.16s.1-.3.1-.53c0-.22-.03-.36-.08-.48s-.14-.17-.29-.17m14.4 0c-.04 0-.09.02-.16.05-.05 0-.1.04-.17.07v1.18l.15.04h.12c.14 0 .26-.04.33-.16s.12-.3.12-.53c0-.22-.02-.39-.1-.48-.04-.12-.14-.17-.28-.17z" />
  </svg>
);
export default SvgBiblionisep;
