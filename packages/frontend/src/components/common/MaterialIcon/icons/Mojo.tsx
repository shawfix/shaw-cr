import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MojoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="M23.5 10.12a9.2 9.2 0 0 1-1.73-1.04.04.04 0 0 0-.02-.01 9.5 9.5 0 0 1-3.74-7.23 9.98 9.98 0 0 0-5.83 7.27A10 10 0 0 0 12 11a9.92 9.92 0 0 0 2.76 6.88l-1.72 1.72A10.98 10.98 0 0 1 10 12a10 10 0 0 1 .12-1.58 10.997 10.997 0 1 0 17.76 10.16A10 10 0 0 0 28 19v-.01a10.97 10.97 0 0 0-4.5-8.87M22 24h-4c4-2 4.37-8.007 0-10h4a5.667 5.667 0 0 1 0 10"></path>
</svg>
;
};

function MojoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MojoSvg} {...props} />
};

export default MojoIcon;
