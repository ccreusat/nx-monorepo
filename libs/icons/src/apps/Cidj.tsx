import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCidj = ({
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
    <path d="M11.97 23.38c0-.05.51-2.02 1.16-4.4.65-2.4 1.15-4.4 1.1-4.45-.04-.1.46-2.2.56-2.34.02-.04 1.47 1.33 3.2 3.01l3.17 3.05-.24.41c-.39.68-2.1 2.36-2.98 2.94a10.8 10.8 0 0 1-3.37 1.46c-1 .24-2.6.44-2.6.32m-2.69-.36a10.73 10.73 0 0 1-6.15-4.3l-.48-.7 4.5-1.23a50 50 0 0 0 4.54-1.32c.1-.15 1.9-.6 2-.5.04.01-.37 1.65-.87 3.6l-1.13 4.13-.15.6-.65-.02c-.36 0-1.08-.12-1.6-.26zm8.52-8.59a61 61 0 0 0-3.59-3.37 2.8 2.8 0 0 1-.67-.53l-.5-.55.38-.1c.2-.04 2.12-.57 4.23-1.15l3.85-1.06.2.36c.09.17.33.77.52 1.3.5 1.45.6 4.24.22 5.8-.32 1.15-.92 2.67-1.11 2.67-.05 0-1.64-1.52-3.54-3.37zM2.14 16.96c-.99-1.93-1.18-5.37-.43-7.58.21-.6.5-1.32.67-1.63l.29-.58 3.53 3.6a78 78 0 0 0 3.7 3.59c.22 0 1 .84.87.96-.07.05-1.42.46-3 .87-1.59.43-3.42.93-4.1 1.13l-1.2.31zm3.73-7.12-3-3 .23-.4c.14-.2.8-.9 1.44-1.56a10.1 10.1 0 0 1 6.3-2.95c.87-.1 1.01-.08.97.1-.05.11-.72 2.56-1.5 5.47L8.9 12.82c-.03.02-1.4-1.32-3.03-2.98m4.18.46c0-.1 1.9-7.36 2.14-8.18.07-.31.56-.31 1.95-.03a10.7 10.7 0 0 1 5.41 2.92c.75.72 1.85 2.16 1.73 2.28-.02.02-2.45.7-5.4 1.51l-5.59 1.54c-.14.05-.24.03-.24-.04M9.7 23.09c-2-.43-3.8-1.44-5.29-2.94-.82-.81-1.73-2.04-1.61-2.14.02-.02 2.02-.57 4.43-1.22 2.4-.67 4.47-1.25 4.59-1.32a7.5 7.5 0 0 1 1.9-.51c.02.02-.39 1.66-.9 3.6L11.7 22.7c-.15.58-.17.6-.65.58-.29 0-.9-.1-1.35-.2zm2.33-.05c.34-1.08 2.29-8.44 2.24-8.49-.07-.05.29-1.51.53-2.21.02-.12 1.3.98 3.22 2.86l3.15 3.05-.4.56c-1.74 2.55-5.23 4.47-8.02 4.47-.7.02-.8-.02-.72-.24m8.18-6.28-4.02-3.87a34 34 0 0 1-2.88-2.93c.07-.05 1.4-.44 2.98-.87 1.59-.4 3.44-.91 4.09-1.1l1.2-.32.34.92a9.6 9.6 0 0 1 .72 4.4 13.3 13.3 0 0 1-.3 2.4c-.26.92-.88 2.4-1.03 2.4-.04 0-.55-.45-1.1-1.03m-18.06.15a9.2 9.2 0 0 1-.82-4.33c0-2 .22-2.96.99-4.64l.36-.75 3.56 3.59a77 77 0 0 0 3.65 3.58c.05 0 .32.22.58.48.34.36.4.5.27.55l-3.56.97-4.04 1.1-.65.2zm3.73-7.07-3-3 .57-.78A10.7 10.7 0 0 1 9.79 2.1c1.32-.26 2.09-.28 2-.04-.03.1-.7 2.55-1.47 5.46l-1.42 5.3c-.03.02-1.4-1.32-3.03-2.98zm4.18.46c0-.1 1.9-7.41 2.14-8.2.07-.22.17-.24.84-.17a11.6 11.6 0 0 1 5.85 2.5c.8.65 1.9 1.95 2.28 2.67.1.19-.65.43-5.34 1.7l-5.6 1.54c-.1.05-.17.03-.17-.04m0 12.79a10.6 10.6 0 0 1-7.24-5.1c0-.02.6-.2 1.33-.38 1.63-.41 6.97-1.9 8.49-2.34a8 8 0 0 1 1.13-.26c0 .04-.44 1.66-.97 3.58-.52 1.95-1 3.8-1.1 4.11-.17.67-.2.67-1.64.39m1.95.05c.1-.3 2.24-8.44 2.5-9.6.14-.55.29-1.1.34-1.18.04-.1 1.34 1.06 3.17 2.84l3.08 2.98-.2.39c-.11.21-.74.94-1.36 1.59-1.33 1.3-2.43 2-4.21 2.62-1.35.45-3.44.7-3.32.36m7.38-7.17a355 355 0 0 0-4.04-3.9c-1.32-1.3-2.09-2.11-2-2.16.6-.2 7.87-2.14 8.04-2.14.1 0 .21.07.21.14.03.22.05.32.3.82.5 1.16.69 2.26.69 4 0 1.39-.07 1.9-.31 2.73-.27.87-.9 2.34-1.01 2.34 0 0-.87-.82-1.88-1.83m-17.22.89a10.85 10.85 0 0 1 .3-9.14l.26-.5 3.5 3.56a77 77 0 0 0 3.66 3.58c.05 0 .32.22.58.48.34.36.41.5.27.55l-3.56.97c-1.85.5-3.66.98-4.02 1.1l-.62.17-.36-.77zm3.73-7-3-3L3.53 6a10.9 10.9 0 0 1 4.84-3.5c.91-.34 3.24-.78 3.36-.63.05.05-2.57 10.1-2.8 10.87-.03.07-1.4-1.23-3.04-2.89zm4.38.05c.17-.29.17-.36.02-.36-.12 0-.12-.03-.02-.07s.14-.17.1-.27c-.05-.12 0-.29.07-.38s.12-.22.07-.27-.03-.17.05-.26c.16-.2.45-1.23.5-1.71 0-.17.05-.27.07-.24.1.1.56-1.9.48-2.02-.04-.07-.02-.12.05-.12.17 0 .43-.91.34-1.25-.05-.14 0-.27.1-.27s.14-.1.1-.21c-.25-.6.33-.67 2.2-.27 2.5.58 4.88 2.2 6.35 4.33l.53.77-3.17.87c-4.67 1.27-7.7 2.07-7.9 2.07-.14 0-.11-.1.06-.34m1.03-.31c-.1-.03-.21-.03-.26.02s.04.07.19.07c.14-.02.2-.04.07-.1zm9.26-3.18c-.05-.04-.14 0-.22.12-.21.34-.16.46.08.22.12-.12.19-.27.14-.34m-.84-.29c-.05-.07-.14-.14-.24-.14s-.1.05.05.14c.26.17.29.17.19 0m-3.78-3.02c0-.08-.07-.15-.14-.15s-.1.07-.05.14c.02.08.1.15.14.15.03 0 .05-.07.05-.14m-3.34-.75c-.05-.12-.17-.22-.26-.2-.12 0-.12.03 0 .08.1.05.16.17.16.29s.05.17.1.12.05-.17 0-.3zm.6-.07c.12-.08.15-.15.07-.15s-.24.07-.36.15c-.1.07-.14.12-.05.12.08 0 .22-.05.34-.12M12 23.14c.07-.2 2.1-7.84 2.57-9.77l.32-1.2 3.07 2.98c1.69 1.64 3.06 3 3.06 3.06 0 .16-.9 1.32-1.52 1.92a10.18 10.18 0 0 1-6.64 3.1c-.77.07-.93.07-.86-.1zm-9.6-5.8c-.07-.17-.1-.34-.07-.4 0-.06-.02-.1-.1-.1-.16 0-.69-1.86-.84-3.03a10 10 0 0 1 .94-5.65c.34-.77.36-.77.6-.51.15.14.3.27.36.27.05 0 .22.19.37.4.14.24.3.41.36.41.07 0 .86.77 1.8 1.71C8.61 13.3 9.28 14 9.26 14.12c-.02.07.05.1.12.07.1-.02.17.05.14.12 0 .1.1.15.22.1.22-.05.99.62.99.89 0 .12-2.43.8-2.84.77-.17-.03-.3.02-.27.07.05.05-.55.26-1.32.46l-2.6.7-1.2.33zm7.7-2.02c-.05-.07-.1-.12-.14-.12-.03 0-.05.05-.05.12s.07.14.14.14.1-.07.05-.14M9.09 14.3c-.1-.1-.22-.17-.24-.15-.07.08.27.5.36.41.02-.02-.02-.14-.12-.26M5.87 9.86 2.88 6.88l.7-.91a10.83 10.83 0 0 1 6.23-3.83c1.51-.31 2.07-.33 1.97-.1-.02.1-.7 2.56-1.47 5.47L8.9 12.82c-.03.02-1.38-1.32-3.03-2.96m15.07-2.7c0-.11.05-.16.1-.14.07.05.12.15.12.22s-.05.12-.12.12c-.05 0-.1-.1-.1-.2m-1.3-1.82c-.19-.21-.16-.21.05-.05s.3.3.2.3c-.05 0-.15-.13-.24-.25zM5.9 9.86 2.91 6.88l.29-.4C4.3 4.9 6.4 3.3 8.13 2.64c.91-.34 3.5-.9 3.63-.77.02.05-2.62 10.22-2.84 10.87-.02.07-1.4-1.23-3.03-2.89zm2.89 2.91c-.05-.02-.03-.24.02-.45.1-.32.07-.39-.1-.37-.12.03-.26.12-.28.22s0 .14.1.07c.09-.05.14-.02.14.05 0 .26-.2.17-.63-.29-.22-.24-.29-.38-.2-.31.13.07.1-.03-.06-.17-.15-.14-.32-.27-.36-.22-.05.03-.15-.02-.2-.12-.07-.1-.04-.12.08-.04s.16.04.12-.08a.26.26 0 0 0-.3-.16c-.11 0-.19-.05-.16-.1.05-.07-.1-.22-.31-.36-.73-.46-1.13-.91-1.04-1.2.05-.2.03-.24-.19-.17-.17.05-.53-.2-1.32-1.01-.9-.91-1.06-1.15-.97-1.42.05-.17.65-.87 1.35-1.54 1.44-1.44 3-2.33 4.83-2.81 1.09-.27 3.03-.39 2.24-.15-.21.08-.26.12-.1.12.25.03.37.3.15.3-.07 0-.12.11-.12.23 0 .44-.8 3.47-.91 3.47-.05 0-.1-.05-.1-.12s-.07-.15-.14-.15c-.1 0-.08.12.04.3.17.23.17.38-.02 1.1-.12.5-.27.8-.36.74-.1-.02-.17.1-.2.3 0 .18.03.28.1.26.15-.1-.24 1.58-.38 1.7-.05.03-.07.15-.1.24l-.02.48c-.03.24-.05.27-.17.1-.07-.12-.12-.14-.12-.05s-.05.27-.1.41c-.07.22-.04.22.08.05.14-.17.14-.1.07.29-.12.65-.27.98-.36.86m-.24-1.08c0-.05-.07-.07-.15-.07s-.14.07-.14.14c0 .1.07.12.14.07s.15-.12.15-.14m-.96-1.03a.15.15 0 0 0-.15-.15c-.1 0-.12.07-.07.15s.12.14.14.14c.05 0 .08-.07.08-.14m1.22 0c0-.15-.55-.32-.65-.22-.12.12.17.31.46.31.1 0 .2-.04.2-.1zM6.42 9.53c-.02-.1-.07-.05-.07.1 0 .16-.07.2-.24.16-.2-.1-.2-.07-.05.12.17.2.2.2.31 0 .08-.12.1-.29.05-.39zM5.15 8.8c-.05-.12-.15-.19-.22-.19s-.07.07.02.2c.1.11.2.21.22.21s.02-.1-.02-.22m4.83-1.27c-.05-.02-.07.05-.07.2.02.16.04.18.1.06.02-.1.02-.21-.03-.26m-5.92-.07c.1-.1.17-.36.17-.63s-.05-.38-.12-.26c-.1.16-.17-.05-.14-.53 0-.1-.05-.15-.12-.1s-.1.2-.05.34c.05.17-.02.31-.2.43-.4.24-.35.34.13.31.21-.02.4.03.4.1 0 .12-.19.17-.52.12-.15-.02-.15 0 0 .17.24.26.24.26.45.05m-.33-.65c0-.07.07-.12.14-.12s.12.05.12.12-.05.14-.12.14-.14-.07-.14-.14m6.13.2c-.05-.06-.1.02-.07.16 0 .17.02.2.07.1.05-.12.05-.24 0-.27zm.4-.27c-.04-.12-.11-.2-.16-.17-.02.05-.02.17.02.31.05.12.12.2.17.14.03-.02.03-.16-.02-.28zM4.89 5.05c-.07-.1-.4.3-.5.6-.08.17 0 .12.21-.14.2-.22.32-.43.3-.46zm.43.08c0-.22-.1-.32-.28-.34-.15 0-.2.02-.1.07.2.07.24.58.02.58-.07 0-.12.07-.12.14 0 .1.08.07.24-.02a.57.57 0 0 0 .24-.44zm1.14-.53c0-.22-.03-.27-.1-.15s-.24.17-.43.12c-.24-.07-.22-.02.07.12.24.1.4.2.4.2.03 0 .03-.13.06-.3zm-.17-.68c.04-.07-.03-.1-.15-.04-.24.1-.29.19-.07.19.07 0 .17-.05.22-.15m.74-.31c-.07-.07-.21-.05-.36.02-.21.15-.21.15.12.12.22 0 .31-.07.24-.14m1.37-.2c0-.06-.19-.09-.43-.06l-.46.04.34-.21c.2-.1.29-.2.21-.2s-.3.1-.52.25l-.39.24.63.02c.33.02.62-.02.62-.07zm2.43-.2c-.02-.1-.12-.18-.24-.18-.1 0-.2.08-.24.17-.02.12.07.2.24.2.2 0 .29-.08.24-.2zm.41-.2c-.05-.05-.1.02-.07.17 0 .16.02.19.07.1s.05-.22 0-.27m-.2-.6a1.5 1.5 0 0 0-.71.02l-.48.12.53-.05c.26-.04.48-.02.43.05s.07.07.24.05c.29-.07.29-.1 0-.2zM3.7 5.87c.17-.22.39-.48.53-.58.12-.1.03.08-.21.39-.53.67-.73.8-.32.19m1.13-1.18c.17-.19.34-.34.39-.34.02 0-.07.15-.27.34-.16.2-.33.34-.38.34s.07-.15.26-.34m2.89-1.78c0-.02.1-.1.2-.12.11-.05.18-.02.14.05-.1.12-.34.2-.34.07" />
  </svg>
);
export default SvgCidj;