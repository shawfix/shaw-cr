import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TurborepoLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em">
  <defs>
    <linearGradient id="a" x1="27.349" x2="7.613" y1="26.455" y2="6.719" gradientTransform="matrix(1 0 0 -1 0 34)" gradientUnits="userSpaceOnUse">
      <stop offset=".15" stop-color="#2196f3"></stop>
      <stop offset=".85" stop-color="#f50057"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, #455a64)" d="M16 8a8 8 0 1 0 8 8 8 8 0 0 0-8-8m0 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4"></path>
  <path fill="var(--material-icon-color, url(#a))" d="M4.281 23.647A13.9 13.9 0 0 1 2 16h4a9.95 9.95 0 0 0 1.192 4.736ZM14 29.84v-4.042a9.9 9.9 0 0 1-3.892-1.732l-2.854 2.855A13.9 13.9 0 0 0 14 29.84M16 2v4a10 10 0 0 1 2 19.8v4.04A13.992 13.992 0 0 0 16 2"></path>
</svg>
;
};

function TurborepoLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TurborepoLightSvg} {...props} />
};

export default TurborepoLightIcon;
