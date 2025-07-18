import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RedSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="M100 60.234V10.322L74.999 47.28z"></path>
  <path fill="var(--material-icon-color, #b71c1c)" d="m100 125.001 57.34-29.893-25.002-36.958L100 75z"></path>
  <path fill="var(--material-icon-color, #f9a825)" d="M100 10.322v49.912l25.001-12.954z"></path>
  <path fill="var(--material-icon-color, #b71c1c)" d="M100 139.766v49.912l89.678-46.65-25.001-36.959z"></path>
  <path fill="var(--material-icon-color, #e53935)" d="M100 139.766 35.323 106.07l-25.001 36.958L100 189.678zm0-14.765V75L67.662 58.15 42.66 95.108z"></path>
</svg>
;
};

function RedIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RedSvg} {...props} />
};

export default RedIcon;
