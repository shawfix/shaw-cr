import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CodeownersSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #afb42b)" d="m20.35 12.25 1.4 1.41-6.53 6.59-3.47-3.5 1.4-1.41 2.07 2.08zm-11.1 4.5 3 3h-10v-2c0-2.21 3.58-4 8-4l1.89.11zm1-13a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4"></path>
</svg>
;
};

function CodeownersIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CodeownersSvg} {...props} />
};

export default CodeownersIcon;
