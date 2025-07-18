import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RescriptInterfaceSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M16 21.862A2.14 2.14 0 0 1 13.862 24h-1.724A2.14 2.14 0 0 1 10 21.862V10.138A2.14 2.14 0 0 1 12.138 8H16ZM21 14a3 3 0 1 1 3-3 3 3 0 0 1-3 3"></path>
  <path fill="var(--material-icon-color, #ef5350)" d="M24 4a4.005 4.005 0 0 1 4 4v16a4.005 4.005 0 0 1-4 4H8a4.005 4.005 0 0 1-4-4V8a4.005 4.005 0 0 1 4-4zm0-2H8a6 6 0 0 0-6 6v16a6 6 0 0 0 6 6h16a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6"></path>
</svg>
;
};

function RescriptInterfaceIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RescriptInterfaceSvg} {...props} />
};

export default RescriptInterfaceIcon;
