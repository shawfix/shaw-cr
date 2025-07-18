import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NuxtSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00e676)" d="m30.27 23-6.93-12a1.98 1.98 0 0 0-1.73-1 1.96 1.96 0 0 0-1.73 1l-2.27 3.93-3.88-6.71a1.996 1.996 0 0 0-3.46 0L1.73 23a2 2 0 0 0 1.73 3h8.915a6 6 0 0 0 5.197-3.001L21.61 16l3.46 6h-2.31l-2.31 4h8.09a2 2 0 0 0 1.73-3m-17.896-1H6.93L12 13.22l3.3 5.71-1.193 2.069A2 2 0 0 1 12.374 22"></path>
</svg>
;
};

function NuxtIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NuxtSvg} {...props} />
};

export default NuxtIcon;
