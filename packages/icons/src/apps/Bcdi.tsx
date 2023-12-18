import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBcdi = ({
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
    <path d="M2.43 19.29c-.07-.24-.1-.5-.03-.53.2-.12 1.93-1.88 2.58-2.65.5-.57.94-1.34.86-1.51 0-.05 0-.07.03-.05.05.03.07-.1.07-.31 0-.24-.02-.34-.07-.31s-.05.02-.03-.05c.03-.05 0-.1-.02-.1s-.05-.05-.05-.1c0-.07-.02-.07-.07 0-.05.05-.05.05-.02-.07 0-.12 0-.14-.08-.12-.04.03-.07-.02-.1-.1s-.06-.09-.09-.09c-.02.03-.05.03-.05-.02 0-.07-.14-.22-.24-.22-.02 0 0-.02.05-.07.12-.05.12-.05 0-.05-.07 0-.21-.1-.34-.24-.12-.12-.26-.26-.36-.33-.1-.05-.21-.15-.29-.22-.04-.05-.14-.1-.16-.1s-.05-.02-.05-.07c0-.02.02-.05.05-.02.04.02.02-.03-.05-.12-.17-.24-.12-.34.26-.5.17-.06.27-.13.24-.18-.02-.02 0-.02.05 0 .07.05.67-.3.87-.52.14-.17.14-.17.05-.39-.05-.14-.15-.26-.22-.29s-.14-.1-.14-.17c-.03-.04-.08-.1-.12-.1L4.5 9.6c-.7-.21-1.61-.31-1.8-.21-.03.02-.1.04-.17.04-.05.03-.27.08-.46.12-.58.12-1.15.12-1.37-.02C.58 9.46.53 9.4.55 9.4s0-.07-.07-.17c-.21-.29 0-.8.44-1 .28-.15.5-.18 1.27-.18.72-.02.84 0 1.01.08.05.02.12.02.12 0 .02 0 .07 0 .12.04.05.03.17.05.31.05s.24.03.24.07c.03.05.07.08.15.05.04 0 .12.03.16.07.03.05.1.08.12.05s.05 0 .08.03c.02.04.07.07.14.07.05 0 .12.02.17.07.02.05.1.1.12.1.05 0 .02-.03 0-.08-.1-.04-.07-.07.07-.02.05.02.07.07.05.1-.03.04 0 .04.02.02.07-.05.41.17.46.26 0 .03.05.03.07 0 .03 0 .05.03.05.08 0 .07.02.1.05.02.05-.07.14 0 .21.27.08.14.08.14.08.02 0-.14 0-.14.1.02.18.32.3.72.3 1.01s0 .34-.21.53c-.12.12-.27.24-.31.27-.15.05-.32.38-.22.5.02.05.05.1.02.12 0 .05 0 .07.05.1.03.05.05.02.03-.03s0 0 .1.08c.06.1.11.19.09.24-.03.02.02.02.07-.03l.07-.05c0 .03.03.1.1.17.31.34.43.5.43.56s.05.14.14.21c.08.07.15.2.17.27s.05.14.08.14c.04 0 .04.05.04.1 0 .07.03.12.05.12.07 0 .2.53.2.89 0 .26-.05.38-.22.67-.12.2-.27.43-.36.5-.08.1-.24.32-.39.46-.31.39-1.32 1.4-1.83 1.83-.19.2-.48.43-.6.55s-.26.22-.31.22c-.05 0-.07.02-.05.02.05.05-.26.27-.58.39-.21.1-.43.07-.36-.03 0-.02-.02-.04-.07-.04-.07 0-.07.02-.07.07l.02.1c-.02 0-.05-.03-.05-.08zm13.03-.05c-.31-.14-.24-.27.5-.84l.56-.41c.1-.1.29-.24.39-.31.1-.1.24-.22.33-.27l.17-.14c.07 0 1.37-1.25 1.7-1.64.2-.24.54-.65.78-.98.07-.1.16-.41.21-.65.1-.46.1-.46-.02-.94l-.22-.58c-.04-.05-.1-.1-.1-.14 0-.03-.09-.15-.2-.3s-.23-.26-.2-.28c.02-.02-.03-.07-.1-.1-.05 0-.14-.07-.17-.14-.02-.05-.07-.1-.1-.1-.04 0-.11-.04-.18-.12-.08-.04-.2-.14-.27-.21s-.14-.12-.17-.12c-.02 0-.12-.05-.19-.15-.1-.07-.17-.12-.19-.1-.05 0-.07 0-.1-.02a9.33 9.33 0 0 0-1.94-.91c0-.02-.1-.05-.2-.05-.38 0-.86-.17-1.1-.4-.2-.2-.22-.22-.15-.37.08-.21.34-.53.46-.53.05 0 .1-.02.12-.04.07-.15 1.13-.05 1.44.12l.2.04c.07 0 .14.03.16.05s.2.1.39.17a7.61 7.61 0 0 1 .8.34c.02 0 .09.04.14.12.04.04.1.1.12.1s.26.14.5.3c.24.17.48.32.5.32s.05.02.03.05c-.02.04 0 .07.05.07s.1.02.12.07c.02.05.07.1.1.1.04 0 .21.12.36.26.14.12.33.29.43.34.07.05.14.12.14.17 0 .02.05.07.07.1.05 0 .12.11.2.23.04.12.12.24.16.27s.05.07.05.12c-.02.04-.02.12 0 .14.07.1.2.46.22.77.14 1.1.02 1.73-.6 2.65a1.5 1.5 0 0 0-.15.28c0 .05-.04.08-.1.1s-.06.05-.06.07c0 .05-.08.12-.15.2-.05.07-.24.26-.36.43a14.18 14.18 0 0 1-1.7 1.6c0 .08-1.33 1.04-1.43 1.04-.04 0-.5.2-.67.3-.12.06-.36.04-.58-.08m7.05-2.57c0-.03-.05-.05-.12-.03-.1.03-.15 0-.2-.1-.11-.2-.11-.23-.11-2.08 0-.94-.03-1.86-.05-2.03l-.1-.64-.05-.36c-.02-.03-.04-.2-.04-.41a2 2 0 0 0-.1-.44c-.1-.12-.17-.98-.12-1.49.05-.36.1-.5.17-.6.07-.07.12-.14.12-.17 0-.04.5-.21.62-.21.22 0 .46.21.6.5.08.17.12.34.12.39 0 .07.05.12.08.12.04.02.07.4.12 1.1.04.94.04 1.23-.08 2.36a21.37 21.37 0 0 1-.33 2.81c-.07.63-.36 1.33-.5 1.33-.05 0-.05-.03-.03-.05m-11.35-.1c-.03-.02-.12-.02-.24-.05-.1 0-.22-.02-.24-.04s-.1-.05-.2-.05a4.29 4.29 0 0 1-.96-.22c-.02 0-.02-.02-.02-.07.05-.05.02-.05-.07-.02-.07 0-.12 0-.15-.05s-.07-.07-.12-.05c-.07.02-.1.02-.04-.05.02-.05.02-.05-.05-.02s-.1 0-.07-.03c.02-.02-.05-.1-.17-.14-.1-.05-.2-.12-.2-.14s-.02-.05-.04-.03c-.05.03-.07.03-.05 0 .02-.05-.24-.4-.26-.36 0 .02-.05 0-.1-.07-.05-.05-.1-.1-.07-.12s-.03-.07-.07-.12c-.08-.05-.12-.12-.1-.15 0-.02 0-.04-.05-.04a.52.52 0 0 1-.07-.12c0-.05-.05-.15-.07-.24a5.07 5.07 0 0 1 0-2.05c.02-.07.02-.1.05-.1.02.03.07-.07.12-.19.07-.24.55-1 .72-1.15.04-.07.1-.14.07-.17s-.03-.05 0-.02c.02.02.12-.03.19-.12a7.6 7.6 0 0 1 1.03-.84c.03 0 .05-.05.03-.08-.03-.04-.03-.04 0-.02a1 1 0 0 0 .26-.12l.58-.36c.2-.1.36-.22.39-.24s.04-.05.04-.02c0 .02.1 0 .2-.05.4-.17.96-.3 1.41-.34.44-.02.46-.02.49.1.04.07.07.1.1.04.04-.07.18.27.16.44 0 .14-.12.36-.17.33s-.05 0-.05.05c0 .03-.07.1-.14.15-.1.02-.17.1-.2.14 0 .05-.04.07-.06.05s-.05 0-.05.02c0 .05-.03.05-.05.05-.02-.02-.1.02-.17.07-.14.17-.96.63-1.03.58-.03 0-.05 0-.05.02s-.14.12-.31.22c-.2.1-.39.22-.48.29s-.2.12-.22.1c-.02 0-.05 0-.05.02 0 .05-.05.07-.07.07-.14 0-.7.4-1.03.77-.51.53-.53.55-.51.6.02.03.02.03-.02.03-.03 0-.08.04-.08.12s.03.07.08 0c.04-.1.07-.05.02.07-.02.05-.07.07-.1.07-.04-.02-.04-.02-.02.05a3.6 3.6 0 0 0-.24 1.15c0 .12.02.24.05.27s.05.04.02.07c-.02.05.03.12.1.19.05.07.1.14.1.17s.02.02.07 0c.02 0 .04 0 .04.02-.04.1.12.3.2.27.04-.03.12.02.19.07.05.07.14.14.21.14.08.03.12.08.1.1s0 .05.05.02c.05-.02.12.03.17.08s.12.07.14.04c.05-.02.07-.02.07.03s.6.21.7.19c0-.02.02 0 .02.02s.17.05.39.05c.21-.02.53 0 .7.05.26.05.3.07.28.17 0 .07.03.12.05.1.07-.03.07.09 0 .19-.07.12-.46.24-.74.24-.17 0-.32 0-.34-.03m4.54-.31c-.24-.41-.36-1.4-.43-3.82-.05-2.12-.07-2.02.36-2.07.17-.03.27 0 .36.1.07.04.12.11.12.14s.05.1.07.14c.17.17.24.9.24 2.21 0 2.38-.04 3.2-.24 3.35-.14.12-.38.1-.48-.05M2.55 14.43c-.07-.05-.15-.07-.17-.05-.02 0-.02-.05-.05-.1 0-.07-.02-.14-.05-.14-.04-.02-.07-.1-.07-.17 0-.1-.02-.19-.05-.21s-.07-.12-.07-.2l-.05-.14-.02-.12c-.02-.29-.17-.8-.22-.81s-.07-.08-.07-.12c0-.17-.1-.63-.12-.7a2.53 2.53 0 0 1-.05-.63v-.6l.22-.02c.14 0 .27.02.34.1s.1.07.07 0c-.02-.05 0-.03.07.04.07.05.12.12.1.17 0 .05 0 .05.07.05.05-.03.07 0 .07.12s0 .14.05.07.07-.05.05.05c0 .05.02.14.07.19.12.17.26 1.35.29 2.28.02.39.05.7.07.7.07 0-.1.22-.22.27a.34.34 0 0 1-.26-.03m1.95-1.95c-.03-.02 0-.02.04 0 .1.03.12.08.05.08-.04 0-.07-.03-.1-.08zM21.69 7.1c-.05 0-.12-.07-.17-.12-.02-.08-.12-.12-.17-.12-.07 0-.12-.03-.12-.05 0-.12 0-.14-.1-.2-.02-.02-.04-.04-.04-.07.02-.02 0-.16-.05-.28-.05-.15-.07-.27-.05-.3.05-.09.46-.23.85-.3a2.67 2.67 0 0 1 1.17.07c.24.1.49.38.49.55 0 .26-.17.46-.58.62-.22.12-.41.17-.46.15-.02-.03-.05 0-.02.02.05.07-.6.1-.75.03" />
  </svg>
);
export default SvgBcdi;
