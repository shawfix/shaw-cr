import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function KotlinSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="1em" height="1em">
  <defs>
    <linearGradient id="a" x1="1.725" x2="22.185" y1="22.67" y2="1.982" gradientTransform="translate(1.306 1.129)scale(.89324)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#7C4DFF"></stop>
      <stop offset=".5" stop-color="#D500F9"></stop>
      <stop offset="1" stop-color="#EF5350"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, url(#a))" d="M2.975 2.976v18.048h18.05v-.03l-4.478-4.511-4.48-4.515 4.48-4.515 4.443-4.477z"></path>
</svg>
;
};

function KotlinIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={KotlinSvg} {...props} />
};

export default KotlinIcon;
