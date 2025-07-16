import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RescriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M24 2H8a6 6 0 0 0-6 6v16a6 6 0 0 0 6 6h16a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6m-8 19.862A2.14 2.14 0 0 1 13.862 24h-1.724A2.14 2.14 0 0 1 10 21.862V10.138A2.14 2.14 0 0 1 12.138 8H16ZM21 14a3 3 0 1 1 3-3 3 3 0 0 1-3 3"></path>
</svg>
;
};

function RescriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RescriptSvg} {...props} />
};

export default RescriptIcon;
