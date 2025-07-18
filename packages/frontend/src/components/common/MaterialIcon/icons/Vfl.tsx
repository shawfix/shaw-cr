import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VflSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="1em" height="1em">
  <defs>
    <radialGradient id="a" cx="205.45" cy="208.29" r="225.35" gradientTransform="matrix(.04556 0 0 .0456 2.888 2.88)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFD600"></stop>
      <stop offset=".35" stop-color="#F9A825"></stop>
      <stop offset="1" stop-color="#F4511E"></stop>
    </radialGradient>
  </defs>
  <g stroke-width=".046">
    <path fill="#F4511E" d="M19.97 3H4.03A1.03 1.03 0 0 0 3 4.03v4.136c1.548-1.19 3.563-1.958 5.948-1.958 5.107.004 8.35 3.575 8.348 8.082 0 3.13-1.46 5.485-3.745 6.71h6.419A1.03 1.03 0 0 0 21 19.967V4.031a1.03 1.03 0 0 0-1.03-1.03z"></path>
    <path fill="url(#a)" d="M3 17.722v2.247A1.03 1.03 0 0 0 4.03 21h1.837C4.474 20.21 3.49 19 3 17.722"></path>
    <path fill="#F4511E" d="M8.948 8.23C6.362 8.142 4.35 9.09 3 10.496v3.162c.918-2.653 3.447-3.87 5.565-3.849 2.647.027 4.689 2.025 4.7 4.284.012 2.158-.892 3.748-3.33 4.14-1.33.213-3.41-.568-3.318-2.578.046-1.037.854-1.622 1.777-1.58-.904 1.213.293 2.102 1.139 1.92 1.048-.223 1.475-1.155 1.475-1.877 0-.762-.717-1.994-2.498-1.952-2.204.053-3.59 1.64-3.638 3.603-.056 2.468 2.254 4.091 4.623 4.12 3.478.046 5.542-2.24 5.538-5.585-.005-3.03-2.434-5.946-6.085-6.072z"></path>
  </g>
</svg>
;
};

function VflIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VflSvg} {...props} />
};

export default VflIcon;
