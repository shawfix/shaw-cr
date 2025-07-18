import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ChromeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 3a11 11 0 0 1 9.208 5H16a6 6 0 0 0-5.74 4.253L7.27 9.334A10.98 10.98 0 0 1 16 5m4 11a4 4 0 1 1-4-4 4.005 4.005 0 0 1 4 4M5 16a10.9 10.9 0 0 1 1.094-4.75l4.838 7.959.003-.002a5.96 5.96 0 0 0 6.16 2.689l-2.996 4.928A11.01 11.01 0 0 1 5 16m11.343 10.983 4.878-8.026-.003-.002A5.97 5.97 0 0 0 20.463 12h5.773a10.966 10.966 0 0 1-9.893 14.983"></path>
</svg>
;
};

function ChromeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ChromeSvg} {...props} />
};

export default ChromeIcon;
