import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonstageenligne = ({
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
    <path d="M12.29 1.35c-8.63 0-8.75 0-9.3.27a3.9 3.9 0 0 0-.95.67c-.67.8-.74.91-.74 7.5h3.8c-.03 0-.05 0-.05-.02 0-.05.17-.24.34-.36.29-.24.5-.27 1.8-.27C9.45 9.14 9.48 9 7.5 7 5.97 5.41 5.85 5.2 6.28 4.48c.24-.41.86-.68 1.32-.56.17.05.94.7 1.68 1.45 1.9 1.9 2.07 1.87 2.07-.44 0-1.58.07-1.78.58-2.06.43-.22.8-.17 1.13.16.29.3.31.39.31 1.76 0 1.51.1 1.95.46 1.95.12 0 .84-.6 1.61-1.37.8-.8 1.54-1.4 1.73-1.45.7-.19 1.47.39 1.47 1.1 0 .56-.17.8-1.61 2.27-1.71 1.73-1.71 1.75.53 1.85 1.25.05 1.63.1 1.82.27.15.12.27.28.27.36 0 0-.02.02-.07.02h3.7c0-5.53-.02-6.25-.22-6.7a3.85 3.85 0 0 0-.67-.97c-.87-.82-.46-.77-10.1-.77m0 5.9c-.58 0-.82.38-.82 1.2 0 .35-.02.84-.07 1.05l-.07.29h1.9V8.9c0-1.2-.24-1.66-.94-1.66zm-11 2.73c0 .8.03 1.64.03 2.62.03 8.06.05 8.56.27 8.97a3.2 3.2 0 0 0 1.97 1.66c.17.05 4.06.1 8.68.1 9.1.02 9.1.02 10-.67.24-.2.58-.65.75-1l.29-.64.02-8.7-.02-2.34H1.3zm13.11 2.55h.63v.65h.58v.5h-.58v1.06c0 .05 0 .12.02.17s.05.07.1.1c.02.04.1.04.17.04.02 0 .07 0 .12-.02.07-.02.1-.02.12-.05h.04v.53l-.21.03c-.07.02-.17.02-.27.02-.24 0-.43-.05-.55-.17s-.17-.31-.17-.6v-1.1h-.26v-.51h.26zm-7.4.58c.34 0 .6.12.77.34.19.21.29.52.29.9s-.1.68-.3.92c-.16.22-.43.32-.76.32s-.6-.1-.8-.32c-.19-.24-.28-.53-.28-.91s.1-.7.28-.91c.2-.22.46-.34.8-.34m14.81 0c.31 0 .55.1.7.29.17.19.24.48.24.84v.26h-1.42c0 .17.07.32.17.41.12.1.26.15.48.15.12 0 .26-.03.38-.07.12-.08.22-.12.3-.2h.06v.6a1.74 1.74 0 0 1-.82.2c-.38 0-.7-.1-.88-.32-.22-.21-.32-.5-.32-.91 0-.39.1-.67.3-.91.18-.22.45-.34.81-.34m-5.02.02c.33 0 .6.05.74.2.17.11.24.33.24.6v1.58h-.6v-.24a.64.64 0 0 0-.15.12.52.52 0 0 0-.11.1l-.2.07c-.07.02-.14.02-.21.02a.6.6 0 0 1-.48-.21c-.12-.12-.2-.31-.2-.5s.05-.32.1-.44a.7.7 0 0 1 .29-.24c.12-.07.24-.12.43-.14.17-.03.34-.05.53-.05v-.03c0-.12-.05-.21-.14-.26a.95.95 0 0 0-.72 0c-.1.02-.2.07-.25.1h-.04v-.58c.05 0 .17-.03.31-.07.14-.03.29-.03.46-.03m-13.23 0c.12 0 .24.03.34.1s.19.17.24.29c.12-.12.24-.22.36-.3s.24-.09.33-.09c.22 0 .39.07.49.22.12.14.16.36.16.65v1.51h-.62v-1.44c0-.1-.03-.14-.05-.2s-.05-.09-.1-.11c-.02-.03-.1-.03-.16-.03-.05 0-.1 0-.17.03-.05.02-.1.05-.17.12v1.63h-.63v-1.44l-.04-.2a.182.182 0 0 0-.1-.11c-.05-.03-.1-.03-.17-.03s-.12 0-.19.05c-.05.03-.1.05-.14.1v1.63H2.3v-2.33h.63v.27c.1-.1.19-.17.31-.24.1-.05.2-.08.31-.08zm6.23 0c.21 0 .38.07.5.22s.17.36.17.65v1.51h-.63v-1.15c0-.1 0-.2-.02-.27 0-.1 0-.16-.02-.21s-.07-.1-.12-.12c-.03-.03-.1-.03-.17-.03s-.12 0-.17.03c-.07.02-.12.07-.2.12v1.63h-.62v-2.33h.63v.26c.1-.1.22-.19.31-.24s.22-.07.34-.07m3.34 0c.14 0 .29 0 .4.05.15.02.25.07.32.12v.58h-.05c-.1-.07-.19-.15-.3-.2a.9.9 0 0 0-.63-.02c-.08.05-.1.1-.1.15 0 .07.02.1.05.14.02.02.1.05.21.07.08.03.15.03.22.05l.21.05c.17.07.3.14.37.24.07.12.12.26.12.43 0 .24-.1.43-.27.58-.2.14-.43.21-.74.21-.17 0-.34-.02-.49-.04-.14-.05-.24-.1-.33-.15v-.6h.07c.02.02.05.05.1.07.04.05.1.07.16.1.08.05.15.07.22.1.1.02.2.02.26.02.15 0 .22 0 .3-.05.04-.02.07-.07.07-.14 0-.05 0-.1-.05-.12a.53.53 0 0 0-.2-.08l-.19-.04c-.07 0-.14-.03-.21-.05a.65.65 0 0 1-.39-.27c-.1-.1-.12-.26-.12-.43 0-.22.07-.4.27-.55.17-.15.4-.22.72-.22m5.96 0c.12 0 .22 0 .3.05.09.02.16.05.23.12l.03-.12h.6v2.07c0 .21-.03.4-.08.55s-.12.27-.21.36h-.03a1 1 0 0 1 .39-.07c.07 0 .17 0 .24.03l.2.02v.53h-.06c-.02 0-.04-.03-.1-.03-.04-.02-.09-.02-.14-.02-.12 0-.21.02-.24.07-.04.05-.07.17-.07.31v.03h.48v.5h-.45v1.83h-.63v-1.83h-.26v-.5h.26v-.07c0-.3.05-.5.2-.65 0 0 0-.03.02-.03l-.15.08c-.14.02-.29.04-.45.04-.15 0-.27 0-.41-.02l-.34-.07v-.6h.07c.07.04.17.07.3.12.09.02.2.02.28.02.12 0 .22 0 .29-.02s.12-.08.17-.12l.07-.17a.86.86 0 0 0 .02-.24v-.05a.73.73 0 0 1-.24.17c-.1.05-.19.07-.31.07-.26 0-.48-.1-.62-.29s-.24-.5-.24-.91c0-.2.02-.36.07-.48.05-.15.12-.27.19-.39.07-.1.17-.17.29-.21s.21-.08.34-.08zm2.67.46c-.12 0-.24.02-.31.1-.07.1-.12.19-.12.36h.82c-.03-.15-.05-.27-.12-.34-.05-.1-.15-.12-.27-.12M7 13.64c-.07 0-.12 0-.17.02s-.1.07-.14.12c-.03.05-.08.12-.1.22l-.02.36.02.33c.02.1.05.17.1.22.02.05.07.1.12.12.07.02.12.05.19.05.05 0 .1-.03.17-.05.04-.02.07-.05.12-.12a.48.48 0 0 0 .1-.2c.02-.09.02-.2.02-.35s0-.24-.03-.34a.72.72 0 0 0-.1-.24.29.29 0 0 0-.11-.12c-.08-.02-.12-.02-.17-.02m12.36.02a.52.52 0 0 0-.39.17.95.95 0 0 0-.12.48c0 .22.05.39.12.48.05.07.17.12.32.12.04 0 .12 0 .16-.02.08-.03.12-.07.17-.1v-1.06a.18.18 0 0 0-.12-.04c-.07 0-.12-.03-.14-.03m-2.19.77-.29.02-.21.05c-.08.03-.13.07-.15.12s-.05.1-.05.17v.12c.03.02.03.05.05.1.05.02.07.04.1.04.04.03.1.03.19.03.05 0 .12-.03.2-.05a.73.73 0 0 0 .16-.12zm-8.75 1.68h.62v3.25h-.62zm1.18 0h.67v.58H9.6zm-6.33.85c.31 0 .55.1.72.28.14.2.22.46.22.82v.27H2.79c0 .17.07.31.17.4.12.1.26.15.48.15.12 0 .26-.02.38-.07.12-.07.22-.12.3-.2h.06v.6a1.4 1.4 0 0 1-.4.15c-.13.05-.27.05-.41.05-.39 0-.7-.1-.9-.31-.21-.22-.3-.5-.3-.9s.09-.69.28-.9c.2-.25.48-.34.82-.34m13.54 0c.34 0 .58.1.72.28.17.2.24.46.24.82v.27h-1.42c0 .17.05.31.17.4.1.1.26.15.48.15.12 0 .24-.02.39-.07.12-.07.21-.12.28-.2h.08v.6c-.15.08-.3.13-.41.15-.12.05-.27.05-.41.05-.39 0-.7-.1-.92-.31-.19-.22-.3-.5-.3-.9s.11-.69.3-.9c.2-.25.46-.34.8-.34m-10.87 0c.22 0 .39.07.5.21s.17.36.17.65v1.54H6v-1.45l-.05-.2c-.02-.05-.07-.08-.1-.1a.45.45 0 0 0-.19-.05l-.17.02c-.07.03-.12.07-.19.12v1.66h-.62v-2.33h.62v.24c.1-.1.22-.17.32-.24.1-.05.21-.08.33-.08zm5.65 0c.1 0 .2.02.29.04l.22.12.02-.1h.6v2.08c0 .21-.02.38-.07.55a.69.69 0 0 1-.22.34c-.1.1-.19.14-.33.19-.12.02-.3.05-.46.05-.12 0-.27 0-.39-.03l-.33-.07v-.58h.07l.26.1c.12.02.22.05.32.05s.19-.03.26-.05c.07-.03.15-.05.17-.1a.26.26 0 0 0 .07-.17c.03-.07.03-.16.03-.26v-.05c-.08.07-.15.15-.24.2-.1.02-.2.04-.32.04-.26 0-.48-.1-.62-.29s-.22-.5-.22-.89c0-.19.03-.36.07-.5s.1-.27.2-.36c.07-.1.16-.17.26-.24a.96.96 0 0 1 .36-.08zm3 0c.22 0 .4.07.51.21s.17.36.17.65v1.54h-.63v-1.45c-.02-.09-.02-.16-.04-.2s-.05-.08-.1-.1a.45.45 0 0 0-.2-.05l-.16.02c-.07.03-.12.07-.2.12v1.66h-.62v-2.33h.63v.24l.31-.24a.85.85 0 0 1 .34-.08zm7.68.04h.07c.03 0 .05 0 .07.03v.7h-.05c-.02 0-.07-.03-.14-.03h-.14c-.1 0-.17 0-.24.03a.39.39 0 0 0-.22.07v1.56h-.63v-2.33h.63v.33c.14-.14.26-.24.36-.28s.2-.08.29-.08m-12.65.03h.62v2.33h-.62zm-6.4.38a.51.51 0 0 0-.31.12c-.07.08-.12.2-.12.36h.82a.65.65 0 0 0-.1-.36.4.4 0 0 0-.29-.12m13.54 0c-.12 0-.22.05-.29.12s-.12.2-.12.36h.8c0-.16-.03-.28-.1-.36-.05-.07-.14-.12-.29-.12m-4.93.1c-.17 0-.29.05-.36.17-.1.1-.12.26-.12.45 0 .24.02.39.1.49s.16.12.3.12c.08 0 .13 0 .2-.03.05-.02.1-.05.15-.1v-1.05c-.03-.03-.08-.03-.12-.05zm6.4 1.03h.65v.82h-.65z" />
  </svg>
);
export default SvgMonstageenligne;
