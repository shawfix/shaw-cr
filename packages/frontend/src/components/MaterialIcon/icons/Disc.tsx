import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DiscSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #b0bec5)" d="M16 12a4 4 0 1 1-4 4 4.005 4.005 0 0 1 4-4m0-10a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></path>
</svg>
;
};

function DiscIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DiscSvg} {...props} />
};

export default DiscIcon;
