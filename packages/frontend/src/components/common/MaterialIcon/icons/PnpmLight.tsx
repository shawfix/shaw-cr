import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PnpmLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #757575)" d="M2 22h8v8H2zm10 0h8v8h-8zm10 0h8v8h-8zM12 12h8v8h-8z"></path>
  <path fill="var(--material-icon-color, #ffb300)" d="M2 2h8v8H2zm10 0h8v8h-8zm10 0h8v8h-8zm0 10h8v8h-8z"></path>
</svg>
;
};

function PnpmLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PnpmLightSvg} {...props} />
};

export default PnpmLightIcon;
