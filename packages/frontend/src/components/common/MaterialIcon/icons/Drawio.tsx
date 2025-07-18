import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DrawioSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fb8c00)" d="m25.329 20-7.001-8H20V4h-8v8h1.672l-7.001 8H4v8h8v-8H9.328L16 12.376 22.672 20H20v8h8v-8z"></path>
</svg>
;
};

function DrawioIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DrawioSvg} {...props} />
};

export default DrawioIcon;
