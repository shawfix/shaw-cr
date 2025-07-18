import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function KeystaticSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em">
  <defs>
    <linearGradient id="a" x1="385.222" x2="405.918" y1="482.514" y2="477.914" gradientTransform="matrix(.75 0 0 .75 -284.775 -343.25)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#78909c" stop-opacity=".2"></stop>
      <stop offset="1" stop-color="#78909c"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, #78909c)" d="m17.714 9-3.428 14-1.715 7L28 14ZM4 18 19.429 2l-1.715 7Z"></path>
  <path fill="var(--material-icon-color, url(#a))" d="M17.714 9 4 18l10.286 5Z"></path>
</svg>
;
};

function KeystaticIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={KeystaticSvg} {...props} />
};

export default KeystaticIcon;
