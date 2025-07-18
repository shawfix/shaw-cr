import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LiaraSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="1em" height="1em">
  <defs>
    <linearGradient id="a" x1="11.328" x2="90.301" y1="8.203" y2="10.761" gradientTransform="matrix(.15939 0 0 .16254 -.134 -.857)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#69F0AE"></stop>
      <stop offset="1" stop-color="#4FC3F7"></stop>
    </linearGradient>
    <linearGradient id="b" x1="11.328" x2="90.301" y1="8.203" y2="10.761" gradientTransform="matrix(.15939 0 0 .16253 .195 -.856)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#69F0AE"></stop>
      <stop offset="1" stop-color="#4FC3F7"></stop>
    </linearGradient>
    <linearGradient id="c" x1="11.328" x2="90.301" y1="8.203" y2="10.761" gradientTransform="matrix(.15784 0 0 .16493 .15 -.355)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#69F0AE"></stop>
      <stop offset="1" stop-color="#4FC3F7"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, url(#a))" d="M8.5 8.811c0-.53.368-1.174.82-1.44l3.86-2.257c.452-.265.82-.052.82.479v4.596c0 .527-.368 1.17-.82 1.436l-3.86 2.261c-.452.265-.82.051-.82-.479zm0 0"></path>
  <path fill="var(--material-icon-color, url(#b))" d="M2 5.593c0-.53.368-.745.82-.479l3.86 2.258c.452.264.82.909.82 1.44v4.595c0 .53-.368.744-.82.48l-3.86-2.262c-.452-.264-.82-.909-.82-1.44zm0 0"></path>
  <path fill="var(--material-icon-color, url(#c))" d="M3.336 4.467c-.448-.27-.448-.706 0-.972l3.821-2.293c.447-.27 1.173-.27 1.62 0l3.888 2.332c.447.268.447.702 0 .971L8.843 6.799c-.447.268-1.173.268-1.624 0zm0 0"></path>
</svg>
;
};

function LiaraIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LiaraSvg} {...props} />
};

export default LiaraIcon;
