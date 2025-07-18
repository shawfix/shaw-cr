import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GulpSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M17.5 12V7.75l3.4-2.55a1.5 1.5 0 0 0-1.8-2.4l-4.6 3.45V12H8v2h2l1.38 16h9.255L22 14h2v-2Z"></path>
</svg>
;
};

function GulpIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GulpSvg} {...props} />
};

export default GulpIcon;
