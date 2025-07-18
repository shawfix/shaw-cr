import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ZeaburSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #cfd8dc)" d="m14 20 4 4-4 4H2v-8h8l10-8-6-4 6-4h10v8Z"></path>
  <path fill="var(--material-icon-color, #651fff)" d="M20 4H2v8h18Z"></path>
  <path fill="var(--material-icon-color, #ff3d00)" d="M30 20H14v8h16Z"></path>
</svg>
;
};

function ZeaburIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ZeaburSvg} {...props} />
};

export default ZeaburIcon;
