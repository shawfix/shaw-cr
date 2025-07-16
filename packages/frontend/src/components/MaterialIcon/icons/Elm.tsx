import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ElmSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323 323" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FFB300)" d="m106.716 99.763 54.785 54.782 54.779-54.782z"></path>
  <path fill="var(--material-icon-color, #64DD17)" d="M96.881 89.93H216.83l-55.18-55.184H41.7zm131.546 11.593 59.705 59.704L228.16 221.2l-59.705-59.704z"></path>
  <path fill="var(--material-icon-color, #00B8D4)" d="m175.552 34.746 112.703 112.695V34.746z"></path>
  <path fill="var(--material-icon-color, #455A64)" d="m34.746 281.3 119.8-119.8-119.8-119.8z"></path>
  <path fill="var(--material-icon-color, #FFB300)" d="m288.255 175.01-53.148 53.149 53.148 53.14z"></path>
  <path fill="var(--material-icon-color, #00B8D4)" d="M281.3 288.254 161.5 168.455l-119.8 119.8z"></path>
</svg>
;
};

function ElmIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ElmSvg} {...props} />
};

export default ElmIcon;
